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
import Register from "./routes/userRoutes.js"
import { User } from "./model/userModel.js";
import { generateOtp, sendOtp } from "./middleware/sendotp.js";

app.use('/api', Register)

app.post('/api/registration', async (req, res) => {
    try {
        const {contact } = req.body;
        let user = await User.findOne({contact});
        if (user) {
          return res.status(400).json({
            message: "User Already Register",
          });
        }
        //otp generate and send to mobile number
        const otp = generateOtp();
        await sendOtp(contact, otp);
    
        user = { contact };
        console.log(user)
        const activationToken = jwt.sign(
          {contact, otp },
          process.env.SECRET,
          { expiresIn: "5m" }
        );
        res.status(200).json({
            message: "Registration successful, OTP sent to your phone",
            activationToken,
        });
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
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