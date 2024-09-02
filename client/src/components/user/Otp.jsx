// import React from 'react'
import { Link } from 'react-router-dom'
import "./otp.css";

const Otp = () => {
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
              <p id="p">Please enter the OTP sent to </p>
              <p id="n">98765432109</p>

              <div className="container fill">
                <div id="inputs" className="inputs">
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
                    <div className='d-grid gap-2 mt-5'>
                        <button className='verify'><Link to="/">Verify</Link></button>
                        
                    </div>
                    <p style={{marginTop:'18px',textAlign:'center'}}>Not received your code ? <Link style={{textAlign:'center',textDecoration:'none'}}>Resend Code</Link> </p>
                </div>
              </div>
            </div>
            
               
            
          </div>
        </div>
     
    </div>
  );
};
export default Otp;
