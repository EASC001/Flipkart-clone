/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/flipkartimg1.png'
import './navbar.css'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCart } from "react-icons/pi";
import { CiShop } from "react-icons/ci";

export const Navbar = () => {
  const [login, setLogin] = useState()
  const [dropdown,setDropdown]=useState()
  const navigate=useNavigate()
  const Login = () => {
    setLogin(true)
    setDropdown(true)
  }
  const Logout = () => {
    setLogin(false)
    navigate('/')
    setDropdown(true)
  }
  return (
<<<<<<< HEAD
    <>
      <div className="container-fluid header ">
        <nav className='d-flex align-items-center p-2 bg-light'>
          <Link to='/'><img src={logo} alt="" height={30} className='' /></Link>
          <div className="input ">
            <input type="text" placeholder='Search for Products,Brands and More...' />
            <span className='search'><CiSearch /></span>
          </div>
          <div className="buttons d-flex ms-5 gap-5 align-items-center">
            <div className="dropdown">
              <button className='border border-0 btn  dropdown-toggle' data-bs-toggle="dropdown" onClick={Login}><span className='pe-2'><CgProfile /></span>Login</button>


              {/* <button className='border border-0 btn  dropdown-toggle' data-bs-toggle="dropdown"> <span className='pe-2'><CgProfile/></span>Login</button> */}
              <ul className="dropdown-menu">
                {login ? (
                  <>
                  {dropdown && (
                    <>
                    <li><Link to='/signup' className="dropdown-item">Login / SignUp</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    </>
                  )}
                    <li><Link to='/profile' className="dropdown-item">My Profile</Link></li>
                    <li><Link to='/gift' className="dropdown-item">Orders</Link></li>
                    <li><Link to='/gift' className="dropdown-item">Whislist</Link></li>
                    <li><Link to='/gift' className="dropdown-item">Rewards</Link></li>
                    <li><Link to='/gift' className="dropdown-item">Gift Cards</Link></li>

                  </>
                ) : (
                  <>
                    <li><button className="dropdown-item fs-6" onClick={Logout}>Logout</button></li>
                  </>
                )}
              </ul>
            </div>
            <div className="cart">
              <span className='pe-2'><PiShoppingCart /></span>
              <Link>Cart</Link>
            </div>
            <div className="seller">
              <span className='pe-2'><CiShop /></span>
              <Link>Become a Seller</Link>
            </div>
          </div>
        </nav>
      </div>




    </>
=======
  <> 
  <div className="container-fluid header ">
    <nav className='d-flex align-items-center p-2 bg-light'>
        <Link to='/'><img src={logo} alt="" height={30} className='' /></Link>
        <div className="input">
          <input type="text" placeholder='Search for Products,Brands and More...' />
          <span className='search'><CiSearch/></span>
        </div>
        <div className="buttons d-flex ms-5 gap-5 align-items-center">
        <div className="dropdown">
         
          <button className='border border-0 btn  dropdown-toggle' data-bs-toggle="dropdown"> <span className='pe-2'><CgProfile/></span>Login</button>
          {/* <button className='border border-0 btn  dropdown-toggle' data-bs-toggle="dropdown"> <span className='pe-2'><CgProfile/></span>Login</button> */}
            <ul className="dropdown-menu">
                <li><Link to='/signup' className="dropdown-item">Login / SignUp</Link></li>
                {/* <li><Link to='/signup' className="dropdown-item">New Customer?  Signup</Link></li> */}
                <li><hr className="dropdown-divider"/></li>
                <li><Link to='/profile' className="dropdown-item">My Profile</Link></li>
                <li><Link to='/gift' className="dropdown-item">Orders</Link></li>
                <li><Link to='/gift' className="dropdown-item">Whislist</Link></li>
                <li><Link to='/gift' className="dropdown-item">Rewards</Link></li>
                <li><Link to='/gift' className="dropdown-item">Gift Cards</Link></li>
            </ul>
        </div>
        <div className="cart">
          <span className='pe-2'><PiShoppingCart /></span>
            <Link>Cart</Link>
        </div>
        <div className="seller">
          <span className='pe-2'><CiShop /></span>
          <Link>Become a Seller</Link>
        </div>
        </div>
    </nav>
  </div>
 
  </>
>>>>>>> 52ffe4f3e5097c3378742a47c0e07f3ea65f1f00
  )
}
