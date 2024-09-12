import { User } from "../model/userModel.js";
import { sendOtp, generateOtp } from "../middleware/sendotp.js";
import sendMail from "../middleware/sendMail.js";
import jwt from "jsonwebtoken";

//new user registration
export const Registeruser = async (req, res) => {
  try {
    console.log(req.body);
    const { contact } = req.body;
    //otp generate and send to mobile number
    const otp = generateOtp();
    await sendOtp(contact, otp);

    const activationToken = jwt.sign({ contact, otp }, process.env.SECRET, {
      expiresIn: "5m",
    });
    await res.status(200).json({
      otp,
      activationToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const verifyuser = async (req, res) => {
  try {
    const { otp, activationToken } = req.body;

    // Verify the activation token
    const decodedToken = jwt.verify(activationToken, process.env.SECRET);

    if (!decodedToken) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const { contact, otp: tokenOtp } = decodedToken;
    // Check if the OTP matches
    if (tokenOtp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // Update the user's verification status
    let user = new User({ contact, isVerified: true });
    await user.save();

    return res.status(200).json({
      message: "User registration successful",
    });
  } catch (error) {
    // Handle errors (invalid token, etc.)
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const LoginUser = async (req, res) => {
  try {
    const { email, contact } = req.body;

    if (!email && !contact) {
      return res.status(400).json({
        message: "Please provide either an Email ID or a Mobile number",
      });
    }

    // Find the user based on either email or contact
    let user;
    if (email) {
      user = await User.findOne({ email });
    } else if (contact) {
      user = await User.findOne({ contact });
    }

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email ID or Mobile number",
      });
    }
    let otp;
    if (contact) {
      otp = generateOtp();
      await sendOtp(contact, otp);
    } else if (email) {
      otp = generateOtp();
      const message = `Please verify your account using OTP. Your OTP is ${otp}`;
      await sendMail(email, "Welcome to our website", message);
    }
    const token = jwt.sign(
      { _id: user._id, email, contact,otp },
      process.env.SECRET,
      {
        expiresIn: "15d",
      }
    );

    const userDetails = user.toObject();
    return res.status(200).json({
      token,
      otp, // Return OTP only if necessary for the client
      user: userDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const verifyOtp = async (req, res) => {
  try {
    const { otp, token } = req.body;

    // if (!otp) {
    //   return res.status(400).json({
    //     message: "OTP and token are required",
    //   });
    // }

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!decodedToken) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    // Find the user based on decoded token
    const { email, contact, otp: tokenOtp } = decodedToken;
    let user;
    if (email) {
      user = await User.findOne({ email });
    } else if (contact) {
      user = await User.findOne({ contact });
    }

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Check if the OTP matches
    if (tokenOtp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // Clear OTP after successful verification
    // tokenOtp = undefined;
    // await user.save();

    // Generate a new token or proceed with login
    const newToken = jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: "15d",
    });

    return res.status(200).json({
      token: newToken,
      user: user.toObject(),
      message: "Login successful",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const Profile = async (req, res) => {
  try {
    const profile = await User.findById(req.params.id);

    if (!profile) {
      return res.status(404).json({
        message: "user is not found",
      });
    }
    return res.json(profile);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const UpdateProfile = async (req, res) => {
  try {
    const userupdate = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contact: req.body.contact,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      userupdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
