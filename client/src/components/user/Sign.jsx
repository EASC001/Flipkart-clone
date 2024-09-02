import React, { useEffect, useState } from 'react'
import "./sign.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Sign = () => {
    const [number, setNumber] = useState('')
    useEffect(() => {
        // axios({ 
        //     method: 'get',
        //     url: 'http://localhost:3010/api'
        // })
        //     .then(res => res.json())
        //     .then(data => setNumber(data));
        axios.get('http://localhost:3010/api')
            .then(response => {
                console.log(response.data)
            })
    }, []);
    const sign = async (e) => {
        try {
            e.preventDefault();
            const contact = String(number)
            const response = await axios.post('http://localhost:3010/api/user/registration',
                { contact },
                {
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                }
            )
            setNumber(response)
        } catch (error) {
            console.error("error", error)
        }
    }
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
                    <input className='input-form' type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Enter Mobile Number' />
                    <label className='form__label' htmlFor="">Enter Mobile Number</label>
                    <p className='' style={{ color: '#878787' }}>
                        By continuing, you agree to Flipkart's <a className='link-offset-2 link-underline link-underline-opacity-0' href="#">Terms of Use</a> and <a className='link-offset-2 link-underline link-underline-opacity-0' href="#">Privacy Policy</a>
                    </p>
                    <div className='d-grid gap-2'>
                        <button className='sign-button' onClick={sign}><Link to="/">CONTINUE</Link></button>
                        <button className='log-button'><Link to="/login">Existing User? Log in</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sign
