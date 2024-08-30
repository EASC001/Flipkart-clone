import React from 'react'
import "./sign.css"
import { Link } from 'react-router-dom'

const Sign = () => {
    return (
        <div className='window'>
            <div className='parent-contain'>
                <div className='welcome'>
                    <div className='sign'>
                        <h2>Looks like you're new here!</h2>
                        <h5>Sign up with your mobile number to get started</h5>
                    </div>
                </div>
                <div className='form-sign'>
                    <input className='input-form' type="text" placeholder='Enter Mobile Number' />
                    <label className='form__label' htmlFor="">Enter Mobile Number</label>
                    <p className='' style={{ color: '#878787' }}>
                        By continuing, you agree to Flipkart's <a className='link-offset-2 link-underline link-underline-opacity-0' href="#">Terms of Use</a> and <a className='link-offset-2 link-underline link-underline-opacity-0' href="#">Privacy Policy</a>
                    </p>
                    <div className='d-grid gap-2'>
                        <button className='sign-button'><Link to="/">CONTINUE</Link></button>
                        <button className='log-button'><Link to="/login">Existing User? Log in</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sign
