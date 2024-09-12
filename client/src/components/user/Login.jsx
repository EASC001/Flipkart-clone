import { useState, useEffect } from "react";
import "./sign.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:3010/api/v1/admin";
    axios
      .get(url)
      .then((response) => {
        // If needed, handle the response here
      })
      .catch((error) => {
        console.error("Error fetching initial data:", error);
      });
  }, []);

const handleLogin = async (e) => {
  e.preventDefault(); // Prevent default form submission

  const trimmedUser = user.trim();
  if (!trimmedUser) {
    setError("Email/Mobile Number is required.");
    return;
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedUser);
  const isContact = /^[0-9]{10}$/.test(trimmedUser); // Adjust regex as needed

  if (!isEmail && !isContact) {
    setError("Invalid Email ID or Mobile Number format.");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:3010/api/v1/user/login",
      isEmail ? { email: trimmedUser } : { contact: trimmedUser },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
    const { otp, token } = response.data;
    sessionStorage.setItem("user", JSON.stringify(trimmedUser)); // Ensure data is stringified
    sessionStorage.setItem("activationToken", token); // Directly store the token
    navigate("/otplog", {
      state: { activationToken: token },
    });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      setError(error.response.data.message);
    } else {
      setError("Login failed. Please try again.");
    }
    console.error("Error during login:", error);
  }
};



  return (
    <div className="window">
      <div className="parent-contain">
        <div className="welcome">
          <div className="sign">
            <h2>Login</h2>
            <h5>Get access to your Orders, Wishlist and Recommendations</h5>
          </div>
        </div>
        <div className="form-sign">
          <input
            className="input-form"
            type="text"
            placeholder="Enter Email/Mobile Number"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label className="form__label" htmlFor="">
            Enter Email/Mobile Number
          </label>
          <p className="" style={{ color: "#878787" }}>
            By continuing, you agree to Flipkarts{" "}
            <Link className="link-offset-2 link-underline link-underline-opacity-0">
              Terms of Use
            </Link>{" "}
            and{" "}
            <a
              className="link-offset-2 link-underline link-underline-opacity-0"
              href="#"
            >
              Privacy Policy
            </a>
          </p>
          <div className="d-grid gap-2">
            <button className="sign-button" onClick={handleLogin}>
              <Link to="/otplog">Request OTP</Link>
            </button>
            <Link
              className="new-acc link-offset-2 link-underline link-underline-opacity-0"
              to="/signup"
            >
              New to Flipkart? Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
