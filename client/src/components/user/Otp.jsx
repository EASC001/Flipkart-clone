// import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "./otp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Otp = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { activationToken } = location.state || {};
  const verify = async (e) => {
    try {
      e.preventDefault();

      const OTP = Number(otp); // Ensure otp is correctly defined
      // const activationToken = sessionStorage.getItem('activationToken'); // Assuming you store it in sessionStorage
      // console.log(activationToken)
      const response = await axios.post(
        "http://localhost:3010/api/v1/user/signup",
        { otp: OTP, activationToken },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      sessionStorage.setItem("activationToken", response.data.decodedToken);
      setOtp(response.data); // Adjust based on your actual state management
      toast.success("Register Successfull");
      navigate("/profile");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="window">
        <div className="parent-contain">
          <div className="welcome">
            <div className="sign">
              <h2>Login</h2>
              <br />
              <h5>Get access to your Orders, Wishlist and Recommendations</h5>
            </div>
          </div>
          <div className="content">
            <p id="p">Please enter the OTP sent to your mobile number</p>
            {/* <p id="n">98765432109</p> */}
            <div className="container fill">
              <div id="inputs" className="inputs">
                <input
                  className="input-otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                {/* <input
                    className="input-otp"
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                  />
                  <input
                    className="input-otp"
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                  />
                  <input
                    className="input-otp"
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                  />
                  <input
                    className="input-otp"
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                  />
                  <input
                    className="input-otp"
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                  /> */}
                <div className="d-grid gap-2 mt-5">
                  <button className="verify" onClick={verify}>
                    <Link to="/">Verify</Link>
                  </button>
                </div>
                <p style={{ marginTop: "18px", textAlign: "center" }}>
                  Not received your code ?{" "}
                  <Link style={{ textAlign: "center", textDecoration: "none" }}>
                    Resend Code
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Otp;
