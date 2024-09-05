import express from "express";
import dotenv from "dotenv"
import connectDB from "./database/db.js";
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path'; // Import path module
dotenv.config()

const app = express();
const port = process.env.PORT

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './public')));
app.use(cors());
app.use(express.json());

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./public", "index.html"));
// });


//using routes
import useRoutes from './routes/userRoutes.js'
import { User } from "./model/userModel.js";
import { generateOtp, sendOtp } from "./middleware/sendotp.js";
import jwt from "jsonwebtoken";

app.use('/api', useRoutes)

app.post('/api/registration', async (req, res) => {
  try {
    const { contact } = req.body;

    //otp generate and send to mobile number
    const otp = generateOtp();
    await sendOtp(contact, otp);

    const activationToken = jwt.sign(
      { contact, otp },
      process.env.SECRET,
      { expiresIn: "5m" }
    );
    res.status(200).json({
      otp,
      activationToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
})
app.post('/api/signup', async (req, res) => {
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
})
app.post('/api/login/:id', async (req, res) => {
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
})
app.get('/api/', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error')
  }
})
const startServer = async () => {
  try {
    await connectDB(); // Ensure DB connection is established before starting the server
    app.listen(port, () => {
      console.log('Server running on port 3000...');
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};
startServer();