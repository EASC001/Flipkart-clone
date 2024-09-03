import { User } from "../model/userModel.js";
import { sendOtp, generateOtp } from "../middleware/sendotp.js";
import jwt from "jsonwebtoken";


//new user registration
export const Registeruser = async (req, res) => {
  try {
    console.log(req.body);
    const {contact } = req.body;
    //otp generate and send to mobile number
    const otp = generateOtp();
    await sendOtp(contact, otp);

    const activationToken = jwt.sign(
      {contact, otp },
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
    const {contact, otp: tokenOtp } = decodedToken;
    // Check if the OTP matches
    if (tokenOtp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // Update the user's verification status
    let user = new User({contact, isVerified: true });
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
// export const emailverify = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email });
//     if (!email) {
//       return res.status(400).json({
//         message: "email is not registered! Click to signup",
//       });
//     }
//     const otp = generateOtp();
//     const message = `please verify your account using otp your otp is ${otp}`;
//     await sendMail(email, "Welcome to our website",message);
//     return res.status(200).json({
//       message: "otp send to your mail",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };
// export const numberverify = async (req, res) => {
//   try {
//     const { contact } = req.body;
//     const user = await User.findOne({ contact });
//     if (!user) {
//       return res.status(400).json({
//         message: "mobile number is not registered ! click to signup",
//       });
//     }
//     const otp=generateOtp();
//     const message = `please verify your account using otp your otp is ${otp}`;
//     await sendOtp(contact,"welcome to our website", message);
//     return res.status(200).json({
//         message: "otp send to your number",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message:error.message,
//     });
//   }
// };
