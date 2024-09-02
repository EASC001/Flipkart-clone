import twilio from "twilio"
import crypto from 'crypto';
import dotenv from 'dotenv';
import { formatPhoneNumber } from "../utils/phoneUtils.js";

dotenv.config();

const accountSid = process.env.ACC_ID;
const authToken = process.env.ACC_TOKEN;
const twilioClient = new twilio(accountSid, authToken);
const twilioPhoneNumber = process.env.PHONE;

export const generateOtp = () => {
    return crypto.randomInt(100000, 999999);
  };

export const sendOtp = async (to, otp) => {
    const formattedphone=formatPhoneNumber(to);
    const message = `Your OTP is ${otp}. It is valid for 5 minutes.`;
    try {
      await twilioClient.messages.create({
        body: message,
        to:formattedphone,
        from: twilioPhoneNumber
      });
      console.log('OTP sent successfully');
    } catch (error) {
      console.error('Error sending OTP:', error);
      throw new Error('Failed to send OTP');
    }
  };

  