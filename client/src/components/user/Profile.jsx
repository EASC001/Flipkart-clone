<<<<<<< HEAD
import React from 'react'
import './profile.css'
=======
import './profile.css'
import { FaPowerOff } from "react-icons/fa";
import foot from '../images_2/foot.jpeg';
import order from '../images_2/myorder.svg'
import profile from '../images_2/profile.svg'
import account from '../images_2/accountsettings.svg'
import payment from '../images_2/payments.svg'
import stuf from '../images_2/mystuf.svg'
import { Link } from "react-router-dom";

>>>>>>> 52ffe4f3e5097c3378742a47c0e07f3ea65f1f00

const Profile = () => {
  return (
    <div>
<<<<<<< HEAD
      <h1>hi users</h1>
=======
      <div className="grid d-grid">
      <div className="container profile">
        <img src={profile} alt="" />  Hello <br/>
        <hr />
        <img src={order} alt="" className=''/><Link className='ms-3'  href="my orders" style={{color:'gray',fontSize:'16px'}}>MY ORDERS </Link><br />
        <hr />
        <div className='mt-4'>
        <img src={account} alt="" className='pe-4'/> ACCOUNT SETTINGS<br/>
        <Link href="profile info">profile informtion</Link><br/>
        <Link href="manage address">Manage Addresses</Link><br/>
        <Link href="PAN card">PAN Card Information</Link><br/>
        </div>
        <hr />
        <div className='mt-4'>
        <img src={payment} alt="" className='pe-4'/> PAYMENTS <br/>
        <Link href="gift">Gift Cards    ₹0</Link><br/>
        <Link href="saved UPI">Saved UPI</Link><br/>
        <Link href="saved cards">Saved Cards</Link><br/>
        </div>
        <hr />
        <div className='mt-4'>
        <img src={stuf} alt="" className='pe-4'/> MY STUFF <br/>
        <Link href="coupons">My Coupons</Link><br/>
        <Link href="reviews">My Reviews & Ratings</Link><br/>
        <Link href="notifications">All Notifications</Link><br/>
        <Link href="wishlist">My Wishlist</Link><br/>
        <Link to='/' style={{color:'gray',fontSize:'16px'}}><span><FaPowerOff /></span> Logout</Link>
        </div>
     </div>

>>>>>>> 52ffe4f3e5097c3378742a47c0e07f3ea65f1f00
      <div className="container">
        <p>Personal Information</p>
        <div className="input-name d-flex">
          <input type="text" />
          <input type="text" />
        </div>
<<<<<<< HEAD
      </div>
    </div>
  )
}
export default Profile
=======
        <div className="gen mt-3 ms-2">
          <label htmlFor="gender p-3">Gender</label><br />
          <input type="radio" id="html" name="fav_language" className='input-name mt-3' value="HTML"/>
          <label htmlFor="html" className='ms-3'>Male</label>
          <input type="radio" id="css" name="fav_language" className='input-name ms-5' value="CSS"/>
          <label htmlFor="css" className='ms-3'>Female</label><br></br>
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
                <h6 className='ms-3'>  FAQs</h6>
                <p className='p-3' >

                  What happens when I update my email address (or mobile number)?<br />
                 <span> Your login email id (or mobile number) changes, likewise. You ll receive all your account related communication on your updated email <br />
                   address (or mobile number).</span>
                </p>
                <p>
                  When will my Flipkart account be updated with the new email address (or mobile number)?<br />
                  <span>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</span>
                </p>
                <p>
                  What happens to my existing Flipkart account when I update my email address (or mobile number)?<br />
                  <span>Updating your email address (or mobile number) doesnt invalidate your account. Your account remains fully functional. Youll continue <br /> seeing your Order history, saved information and personal details.</span>
                </p>
                <p>
                  Does my Seller account get affected when I update my email address?<br />
                  <span>Flipkart has a single sign-onpolicy. Any changes will reflect in your Seller account also.</span>
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
        )
}

        export default Profile
>>>>>>> 52ffe4f3e5097c3378742a47c0e07f3ea65f1f00

