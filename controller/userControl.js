import { User } from "../model/userModel.js";
import { sendOtp, generateOtp } from "../middleware/sendotp.js";
import sendMail from '../middleware/sendMail.js'
import jwt from "jsonwebtoken";


//new user registration
export const Registeruser = async (req, res) => {
  try {
    console.log(req.body);
    const { contact } = req.body;
    //otp generate and send to mobile number
    const otp = generateOtp();
    await sendOtp(contact, otp);

    const activationToken = jwt.sign(
      { contact, otp },
      process.env.SECRET,
      { expiresIn: "5m" }
    );
    await res.status(200).json({
      otp,
      activationToken,
    });
  } catch (error) {
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
    const { email, contact } = req.body
    const user = await User.findById({ _id: req.params.id })
    if (!user) {
      return res.status(400).json({
        message: "Please enter valid Email ID / Mobile number"
      })
    }
    const token = jwt.sign({ _id: req.params.id }, process.env.SECRET, {
      expiresIn: "15d",
    });
    if (contact) {
      const otp = generateOtp();
      await sendOtp(contact, otp);
    }
    if (email) {
      const otp = generateOtp();
      const message = `please verify your account using otp your otp is ${otp}`;
      await sendMail(email, "Welcome to our website", message);
    }
    return res.status(200).json({
      token,
      user
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
export const Profile = async (req, res) => {
  try {
    const profile = await User.findById(req.params.id)

    if (!profile) {
      return res.status(404).json({
        message: "user is not found"
      })
    }
    return res.json(profile)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
export const UpdateProfile = async (req, res) => {
  try {
    const userupdate = await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        contact: req.body.contact
      },
      {
        new: true,
      }
    )
    return res.status(200).json({
      userupdate
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}