import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./otp.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../user/AuthProvider";

const OtpLog = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { activationToken } = location.state || {};
  const { login } = useAuth(); // Destructure login function from useAuth

  const verify = async (e) => {
    e.preventDefault();
    try {
      const OTP = Number(otp);
      const response = await axios.post(
        "http://localhost:3010/api/v1/user/verify",
        { otp: OTP, token: activationToken },
        { headers: { "Content-Type": "application/json; charset=UTF-8" } }
      );

      const newToken = response.data.token;
      const userData = response.data.user;

      if (newToken) {
        sessionStorage.setItem("activationToken", newToken);
        sessionStorage.setItem("user", JSON.stringify(userData));

        // Update authentication state
        login(userData, newToken);

        toast.success("Login Successful");
        navigate("/");
      } else {
        throw new Error("Token not received in the response.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Verification failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="window">
        <div className="parent-contain">
          <div className="welcome">
            <div className="sign">
              <h2>Login</h2>
              <h5>Get access to your Orders, Wishlist, and Recommendations</h5>
            </div>
          </div>
          <div className="content">
            <p id="p">Please enter the OTP sent to your mobile number</p>
            <div className="container fill">
              <div id="inputs" className="inputs">
                <input
                  className="input-otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <div className="d-grid gap-2 mt-5">
                  <button className="verify" onClick={verify}>
                    Verify
                  </button>
                </div>
                <p style={{ marginTop: "18px", textAlign: "center" }}>
                  Not received your code?{" "}
                  <Link style={{ textAlign: "center", textDecoration: "none" }}>
                    Resend Code
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpLog;
