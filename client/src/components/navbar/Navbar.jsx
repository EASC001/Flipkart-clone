import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/flipkartimg1.png";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCart } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { useAuth } from "../user/AuthProvider";

export const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown menu
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false); // Close the dropdown when an item is clicked
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container-fluid header">
      <nav className="d-flex align-items-center p-2 bg-light">
        <Link to="/">
          <img src={logo} alt="Logo" height={30} />
        </Link>
        <div className="input">
          <input
            type="text"
            placeholder="Search for Products, Brands and More..."
          />
          <span className="search">
            <CiSearch />
          </span>
        </div>
        <div className="buttons d-flex ms-5 gap-5 align-items-center">
<<<<<<< HEAD
        <div className="dropdown">
         
          <button className='border border-0 btn  dropdown-toggle' data-bs-toggle="dropdown"> <span className='pe-2'><CgProfile/></span>Login</button>
          {/* <button className='border border-0 btn  dropdown-toggle' data-bs-toggle="dropdown"> <span className='pe-2'><CgProfile/></span>Login</button> */}
            <ul className="dropdown-menu">
                <li><Link to='/signup' className="dropdown-item">Login / SignUp</Link></li>
                {/* <li><Link to='/signup' className="dropdown-item">New Customer?  Signup</Link></li> */}
                <li><hr className="dropdown-divider"/></li>
                <li><Link to='/profile' className="dropdown-item">My Profile</Link></li>
                <li><Link to='/' className="dropdown-item">Orders</Link></li>
                <li><Link to='/' className="dropdown-item">Whislist</Link></li>
                <li><Link to='/' className="dropdown-item">Rewards</Link></li>
                <li><Link to='/gift' className="dropdown-item">Gift Cards</Link></li>
=======
          <div
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="border border-0 btn dropdown-toggle"
              type="button"
              aria-expanded={dropdownOpen}
              onClick={toggleDropdown}
            >
              <span className="pe-2">
                <CgProfile />
              </span>
              {isLoggedIn ? (user ? user.name : "Profile") : "Login"}
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              {isLoggedIn ? (
                <>
                  {user && user.role=='admin' && (
                    <li>
                      <Link
                        to="/admin"
                        className="dropdown-item"
                        onClick={handleDropdownItemClick}
                      >
                        Admin
                      </Link>
                    </li>
                  )}
                  <li>
                    <Link
                      to="/profile"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orders"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wishlist"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rewards"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      Rewards
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gift-cards"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      Gift Cards
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleLogout();
                        handleDropdownItemClick(); // Close dropdown on logout
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/signup"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      Login / SignUp
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orders"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wishlist"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/rewards"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      Rewards
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gift-cards"
                      className="dropdown-item"
                      onClick={handleDropdownItemClick}
                    >
                      Gift Cards
                    </Link>
                  </li>
                </>
              )}
>>>>>>> ca4ec025170ad6da366c181000a68889c6788db6
            </ul>
          </div>
          <div className="cart">
            <span className="pe-2">
              <PiShoppingCart />
            </span>
            <Link to="/cart">Cart</Link>
          </div>
          <div className="seller">
            <span className="pe-2">
              <CiShop />
            </span>
            <Link to="/become-a-seller">Become a Seller</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
