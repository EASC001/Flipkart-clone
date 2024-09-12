import React from "react";
import "./profile.css";
import { FaPowerOff } from "react-icons/fa";
import foot from "../images_2/foot.jpeg";
import order from "../images_2/myorder.svg";
import profile from "../images_2/profile.svg";
import account from "../images_2/accountsettings.svg";
import payment from "../images_2/payments.svg";
import stuf from "../images_2/mystuf.svg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="grid d-grid">
        <div className="container profile">
          <img src={profile} alt="" /> Hello <br />
          <hr />
          <img src={order} alt="" className="" />
          <Link
            className="ms-3"
            href="my orders"
            style={{ color: "gray", fontSize: "16px" }}
          >
            MY ORDERS{" "}
          </Link>
          <br />
          <hr />
          <div className="mt-4">
            <img src={account} alt="" className="pe-4" /> ACCOUNT SETTINGS
            <br />
            <Link href="profile info">profile informtion</Link>
            <br />
            <Link href="manage address">Manage Addresses</Link>
            <br />
            <Link href="PAN card">PAN Card Information</Link>
            <br />
          </div>
          <hr />
          <div className="mt-4">
            <img src={payment} alt="" className="pe-4" /> PAYMENTS <br />
            <Link href="gift">Gift Cards ₹0</Link>
            <br />
            <Link href="saved UPI">Saved UPI</Link>
            <br />
            <Link href="saved cards">Saved Cards</Link>
            <br />
          </div>
          <hr />
          <div className="mt-4">
            <img src={stuf} alt="" className="pe-4" /> MY STUFF <br />
            <Link href="coupons">My Coupons</Link>
            <br />
            <Link href="reviews">My Reviews & Ratings</Link>
            <br />
            <Link href="notifications">All Notifications</Link>
            <br />
            <Link href="wishlist">My Wishlist</Link>
            <br />
            <svg
              width="24"
              height="24"
              class=""
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#2874F0"
                stroke-width="0.3"
                stroke="#2874F0"
                d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
              ></path>
            </svg>
            <Link
              to="/"
              style={{
                color: "gray",
                fontSize: "16px",
                fontweight: 500,
                paddingleft: "20px",
              }}
            >
              Logout
            </Link>
          </div>
        </div>

        <div className="container">
          <p>Personal Information</p>
          <div className="input-name d-flex">
            <input type="text" />
            <input type="text" />
          </div>
          <div className="gen mt-3 ms-2">
            <label htmlFor="gender p-3">Gender</label>
            <br />
            <input
              type="radio"
              id="html"
              name="fav_language"
              className="input-name mt-3"
              value="HTML"
            />
            <label htmlFor="html" className="ms-3">
              Male
            </label>
            <input
              type="radio"
              id="css"
              name="fav_language"
              className="input-name ms-5"
              value="CSS"
            />
            <label htmlFor="css" className="ms-3">
              Female
            </label>
            <br></br>
          </div>
          <div className="email mt-3">
            <p>Email Address</p>
            <input type="email" />
          </div>
          <div className="mobile mt-3">
            <p>Mobile Number</p>
            <input type="tel" />
          </div>
          <div className="faq mt-3">
            <h6 className="ms-3"> FAQs</h6>
            <p className="p-3">
              What happens when I update my email address (or mobile number)?
              <br />
              <span>
                {" "}
                Your login email id (or mobile number) changes, likewise. You ll
                receive all your account related communication on your updated
                email <br />
                address (or mobile number).
              </span>
            </p>
            <p>
              When will my Flipkart account be updated with the new email
              address (or mobile number)?
              <br />
              <span>
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </span>
            </p>
            <p>
              What happens to my existing Flipkart account when I update my
              email address (or mobile number)?
              <br />
              <span>
                Updating your email address (or mobile number) doesnt invalidate
                your account. Your account remains fully functional. Youll
                continue <br /> seeing your Order history, saved information and
                personal details.
              </span>
            </p>
            <p>
              Does my Seller account get affected when I update my email
              address?
              <br />
              <span>
                Flipkart has a single sign-onpolicy. Any changes will reflect in
                your Seller account also.
              </span>
            </p>
          </div>
          <div className="img-foot">
            <img src={foot} alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Profile;
