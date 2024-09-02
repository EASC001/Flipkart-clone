import { Link } from "react-router-dom";
import './type.css'
import appliances from '../images/appliances.webp'
import fashion from '../images/fashion.webp'
import furniture from '../images/furniture.webp'
import lap from '../images/lap.webp'
import mobile from '../images/mobile.webp'
import surf from '../images/surf.webp'
import toys from '../images/toys.webp'
import twowheeler from '../images/twowheeler.webp'
import banner1 from '../images/banner1.webp'
import banner2 from '../images/banner2.webp'
import banner3 from '../images/banner3.webp'
import banner4 from '../images/banner4.webp'
import banner5 from '../images/banner5.webp'
import airpods from '../images/airpods2.webp'
import powerbank from '../images/powerbank.webp'
import watch from '../images/smartwatch.webp'
import bluetooth from '../images/headphone.webp' 
import wash from '../images/wash.webp'
import fridge from '../images/fridge.webp'
import add1 from '../images/add1.webp'
import add2 from '../images/add2.webp'
import add3 from '../images/add3.webp'
import add4 from '../images/add4.webp'
import add5 from '../images/add5.webp'
import add6 from '../images/add6.webp'
import add7 from '../images/add7.webp'
import add8 from '../images/add8.webp'
import add9 from '../images/add9.webp'
import add10 from '../images/add10.webp'
import add11 from '../images/add11.webp'
import add12 from '../images/add12.webp'
import add13 from '../images/add13.webp'
import add14 from '../images/add14.webp'
import add15 from '../images/add15.webp'
import add16 from '../images/add16.webp'
import add17 from '../images/add17.webp'
import add18 from '../images/add18.webp'
import add19 from '../images/add19.webp'
import add20 from '../images/add20.webp'
import add21 from '../images/add21.webp'
import add22 from '../images/add22.webp'
import add23 from '../images/add23.webp'
import add24 from '../images/add24.webp'
import add25 from '../images/add25.webp'
import add26 from '../images/add26.webp'
import add27 from '../images/add27.webp'
import add28 from '../images/add28.webp'
import add29 from '../images/add29.webp'
import add30 from '../images/add30.webp'
import phone1 from '../images_2/infinix gt.webp'
import phone2 from '../images_2/moto.webp'
import phone3 from '../images_2/nothing.webp'
import phone4 from '../images_2/poco.webp'
import phone5 from '../images_2/realme p1.webp'
import phone6 from '../images_2/realme.webp'



export const Types = () => {
  return (
    <div>
    <div className="category d-flex  mt-4 justify-content-around align-items-center ">
        <Link><img src={surf} alt="" className="d-block"/>Grocery</Link>
        <Link><img src={mobile} alt="" className="d-block"/>Mobile</Link>
        <Link><img src={fashion} alt="" className="d-block" />Fashion</Link>
        <Link><img src={lap} alt="" className="d-block"/>Electronics</Link>
        <Link><img src={furniture} alt="" className="d-block"/>Furniture</Link>
        <Link><img src={appliances} alt="" className="d-block"/>Appliances</Link>
        <Link><img src={toys} alt="" className="d-block"/>Toys&Gifts</Link>
        <Link><img src={twowheeler} alt="" className="d-block"/>Two Wheeler</Link>
        
    </div>
    <div className="container-fluid mt-3">
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
    
      
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
      </div>
    
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} alt="Los Angeles" className="d-block w-100"/>
        </div>
       
        <div className="carousel-item">
          <img src={banner3} alt="New York" className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={banner4} alt="New York" className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={banner5} alt="New York" className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={banner2} alt="Chicago" className="d-block w-100"/>
        </div>
      </div>
    
      
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
    </div>
    <div className="pro mt-5">
    <h2 className="text-center"><b>Best Deals on Big Bachat</b></h2>
    <div className="container-img container-fluid mt-5">
        <a href=""><img src={airpods}  className="d-block" alt=""/>
        <p className="type">Airpods</p>
        <p className="price"><b>From ₹1,299</b></p></a>
        <a href=""><img src={fridge}   className="d-block" alt=""/>
         <p className="type">Fridge</p>
         <p className="price"><b>From ₹12999</b></p></a>
        <a href=""><img src={wash} className="d-block" alt=""/>
        <p className="type">Washing Machine</p>
        <p className="price"><b>From ₹7999</b></p></a>
        <a href=""><img src={watch}  className="d-block" alt=""/>
        <p className="type">Smart watch</p>
        <p className="price"><b>From ₹999</b></p></a>
        <a href=""><img src={bluetooth}   className="d-block " alt=""/>
        <p className="type">Bluetooth</p>
        <p className="price"><b>From ₹1,299</b></p></a>
        <a href=""><img src={powerbank}  className="d-block" alt=""/>
        <p className="type">Power Bank</p>
        <p className="price"><b>From ₹899</b></p></a>
    </div>
    </div>
    <div className="container-fluid mt-4 ">
      <div className="row g-2">
        <div className="col-4">
            <img src={add1} alt=""  className="d-block  w-100" />
        </div>
        <div className="col-4">
        <img src={add2} alt="" className="d-block add  w-100 "/>
        </div>
        <div className="col-4">
        <img src={add3} alt="" className="d-block add  w-100"  />
        </div>
      </div>
      <div className="row mt-2 g-2">
        <div className="col-4 ">
        <img src={add4} alt=""  className="d-block  w-100 "/>
        </div>
        <div className="col-4 ">
        <img src={add5} alt="" className="d-block  w-100"/>
        </div>
        <div className="col-4">
        <img src={add6} alt="" className="d-block  w-100" />
        </div>
      </div>
    </div>
    
    <div className="container-fluid mt-3 ">
      <div className="row g-2">
        <div className="col-4">
            <img src={add7} alt=""  className="d-block  w-100" />
        </div>
        <div className="col-4">
        <img src={add8} alt="" className="d-block add  w-100 "/>
        </div>
        <div className="col-4">
        <img src={add9} alt="" className="d-block add  w-100"  />
        </div>
      </div>
    <div className="pro mt-5">
    <h2 className="text-center"><b>Best Deals on  SmartPhones</b></h2>
    <div className="container-img container-fluid mt-5">
       
        <a href=""><img src={phone1}  className="d-block" alt=""/>
        <p className="type">Infinix GT 20 Pro</p>
        <p className="price"><b>From ₹22,999</b></p></a>
       
        <a href=""><img src={phone2}   className="d-block" alt=""/>
         <p className="type">Moto Edge 50</p>
         <p className="price"><b>From ₹21,999</b></p></a>
        <a href=""><img src={phone3} className="d-block" alt=""/>
        <p className="type">Nothing 2a</p>
        <p className="price"><b>From ₹25,999</b></p></a>
        <a href=""><img src={phone4}  className="d-block" alt=""/>
        <p className="type">Poco M6 Pro</p>
        <p className="price"><b>From ₹24,999</b></p></a>
        <a href=""><img src={phone5}   className="d-block " alt=""/>
        <p className="type">Realme P1 Pro</p>
        <p className="price"><b>From ₹40,999</b></p></a>
        <a href=""><img src={phone6}  className="d-block" alt=""/>
        <p className="type">Realme P1</p>
        <p className="price"><b>From ₹30,999</b></p></a>
    </div>
    </div>
      <div className="row mt-2 g-2">
        <div className="col-4 ">
        <img src={add10} alt=""  className="d-block  w-100 "/>
        </div>
        <div className="col-4 ">
        <img src={add11} alt="" className="d-block  w-100"/>
        </div>
        <div className="col-4">
        <img src={add12} alt="" className="d-block  w-100" />
        </div>
      </div>
    </div>
    <div className="container-fluid mt-3 ">
      <div className="row g-2">
        <div className="col-4">
            <img src={add13} alt=""  className="d-block  w-100" />
        </div>
        <div className="col-4">
        <img src={add14} alt="" className="d-block add  w-100 "/>
        </div>
        <div className="col-4">
        <img src={add15} alt="" className="d-block add  w-100"  />
        </div>
      </div>
      <div className="row mt-2 g-2">
        <div className="col-4 ">
        <img src={add16} alt=""  className="d-block  w-100 "/>
        </div>
        <div className="col-4 ">
        <img src={add17} alt="" className="d-block  w-100"/>
        </div>
        <div className="col-4">
        <img src={add18} alt="" className="d-block  w-100" />
        </div>
      </div>
    </div>
    <div className="container-fluid mt-3 ">
      <div className="row g-2">
        <div className="col-4">
            <img src={add19} alt=""  className="d-block  w-100" />
        </div>
        <div className="col-4">
        <img src={add20} alt="" className="d-block add  w-100 "/>
        </div>
        <div className="col-4">
        <img src={add21} alt="" className="d-block add  w-100"  />
        </div>
      </div>
      <div className="row mt-2 g-2">
        <div className="col-4 ">
        <img src={add22} alt=""  className="d-block  w-100 "/>
        </div>
        <div className="col-4 ">
        <img src={add23} alt="" className="d-block  w-100"/>
        </div>
        <div className="col-4">
        <img src={add24} alt="" className="d-block  w-100" />
        </div>
      </div>
    </div>
    <div className="container-fluid mt-3 ">
      <div className="row g-2">
        <div className="col-4">
            <img src={add25} alt=""  className="d-block  w-100" />
        </div>
        <div className="col-4">
        <img src={add26} alt="" className="d-block add  w-100 "/>
        </div>
        <div className="col-4">
        <img src={add27} alt="" className="d-block add  w-100"  />
        </div>
      </div>
      <div className="row mt-2 g-2">
        <div className="col-4 ">
        <img src={add28} alt=""  className="d-block  w-100 "/>
        </div>
        <div className="col-4 ">
        <img src={add29} alt="" className="d-block  w-100"/>
        </div>
        <div className="col-4">
        <img src={add30} alt="" className="d-block  w-100" />
        </div>
      </div>
    </div>
    </div>
    
  )
}
