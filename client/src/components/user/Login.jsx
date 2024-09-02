import React from 'react'
import './sign.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
<div className='window'>
            <div className='parent-contain'>
                <div className='welcome'>
                    <div className='sign'>
                        <h2>Login</h2>
                        <h5>Get access to your Orders, Wishlist and Recommendations</h5>
                    </div>
                </div>
                <div className='form-sign'>
                    <input className='input-form' type="text" placeholder='Enter Email/Mobile Number' />
                    <label className='form__label' htmlFor="">Enter Email/Mobile Number</label>
                    <p className='' style={{ color: '#878787' }}>
                        By continuing, you agree to Flipkart's <Link className='link-offset-2 link-underline link-underline-opacity-0'>Terms of Use</Link> and <a className='link-offset-2 link-underline link-underline-opacity-0' href="#">Privacy Policy</a>
                    </p>
                    <div className='d-grid gap-2'>
                        <button className='sign-button'><Link to="/">Request OTP</Link></button>
                        <Link className='new-acc link-offset-2 link-underline link-underline-opacity-0' to="/signup">New to Flipkart? Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Login