// import React from 'react'
import './phone.css'
import realme from '../images_2/realme.webp'
import { Link } from "react-router-dom";


const Phone = () => {
  return (
    <div>
      <div className="grid-container-type container mt-5 mb-5 position-relative" >
      <div className="grid-item1"><img src={realme} className='img-thumbnail' alt="realme" /></div>
      <div className="grid-item-type">
        <h3>realme P15G(Phoenix Red,128 GB)</h3>
        <ul>
          <li>6 GB RAM|12 GB ROM|Expandable Upto 2 TB</li>
          <li>16.94 cm(6.67 inch)Full HD+ Display</li>
          <li>50MP + 2MP|16MP Front Camera</li>
          <li>5000 mAh Battery</li>
          <li>Dimensity 7050 Processor</li>
          <li>
            1 Year Manufacturer Warranty for Device and 6 Months Manufacturer
            for inbox Accessories
          </li>
        </ul>
      </div>
      <div className="grid-item2-type">
        <ul>
            <li>₹15,999</li>
            <li><del>₹20,999</del>  <span style={{color: "green"}}>23% off</span></li>
            <li>Free delivery</li>
            <li>Save extra with combo offers</li>
            <li>Upto ₹11,850 off on Exchange</li>
        </ul>
      </div>
      <div className="buttons-link ">
      <Link className="btn btn-primary mt-5" to='/'>
        Buy Now
      </Link>
      <Link className="btn btn-primary mt-5" to='/'>
        Add to Cart
      </Link>
      </div>
   
    </div>
    </div>
  )
}

export default Phone
