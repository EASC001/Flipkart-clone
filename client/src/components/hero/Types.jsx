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
import brush from '../images_2/brush.webp'
import lip from '../images_2/lip.webp'
import care from '../images_2/care1.webp'
import make from '../images_2/makeup.jpeg'
import grid from '../images_2/grid13.webp'



export const Types = () => {
  return (
    <>
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
    <div className="grid-container">
      <div className="image1">
        <div className="grid-item">
            <img className="img1" src={care} alt="1" />
          <h4>adbeni Skin & Beauty Care Combo</h4>
          <h3>From ₹5,000</h3>
        </div>
        <div className="grid-item">
          <div className="img2">
          <img src={brush} width="200px" height="200px" alt="2" /></div>
          <h4>Maange Makeup Brushes set</h4>
          <h3>From ₹900</h3>
        </div>
        <div className="grid-item">
          <img src={lip} width="200px" height="200px" alt="3" />
          <h4>Lipstick</h4>
          <h3>From ₹700</h3>
        </div>
        <div className="grid-item">
        <img src={make} width="200px" height="200px" alt="4"/> 
        <h4>makeup kit</h4>
        <h3>From ₹8,000</h3>
        </div>
      </div>


      <div className="sideimg">
        <div className="grid-item">
          <img src={grid} alt="5" />
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
    <footer className='mt-5 container-fluid ms-1'>
       <div>
         <div className="footer">
           <h5>Flipkart: The One-stop Shopping Destination</h5>
           <p>
            
             E-commerce is revolutionizing the way we all shop in India. Why do you
             want to hop from one store to another in search of the latest phone
             when you can find it on the Internet in a single click? Not only
             mobiles. Flipkart houses everything you can possibly imagine, from
             trending electronics like laptops, tablets, smartphones, and mobile
             accessories to in-vogue fashion staples like shoes, clothing and
             lifestyle accessories; from modern furniture like sofa sets, dining
             tables, and wardrobes to appliances that make your life easy like
             washing machines, TVs, ACs, mixer grinder juicers and other
             time-saving kitchen and small appliances; from home furnishings like
             cushion covers, mattresses and bedsheets to toys and musical
             instruments, we got them all covered. You name it, and you can stay
             assured about finding them all here. For those of you with erratic
             working hours, Flipkart is your best bet. Shop in your PJs, at night
             or in the wee hours of the morning. This e-commerce never shuts down.
           <br />
           <br />
             Whats more, with our year-round shopping festivals and events, our
             prices are irresistible. Were sure youll find yourself picking up more
             than what you had in mind. If you are wondering why you should shop
             from Flipkart when there are multiple options available to you, well,
             the below will answer your question.
           </p>
          
           <h5>Flipkart Plus</h5>
           <p>
             A world of limitless possibilities awaits you - Flipkart Plus was
             kickstarted as a loyalty reward programme for all its regular
             customers at zero subscription fee. All you need is 500 supercoins to
             be a part of this service. For every 100 rupees spent on Flipkart
             order, Plus members earns 4 supercoins &amp; non-plus members earn 2
             supercoins. Free delivery, early access during sales and shopping
             festivals, exchange offers and priority customer service are the top
             benefits to a Flipkart Plus member. In short, earn more when you shop
             more!
           </p>
          
           <p>
             Whats more, you can even use the Flipkart supercoins for a number of
             exciting services, like:
           </p>
           
           <p>An annual Zomato Gold membership</p>
          
           <p>An annual Hotstar Premium membership</p>
          
           <p>6 months Gaana plus subscription</p>
          
           <p>Rupees 550 instant discount on flights on ixigo</p>
          
           <p>
             Check out https://www.flipkart.com/plus/all-offers for the entire
             list. Terms and conditions apply.
           </p>
        
           <h5>No Cost EMI</h5>
           <p>
             In an attempt to make high-end products accessible to all, our No Cost
             EMI plan enables you to shop with us under EMI, without shelling out
             any processing fee. Applicable on select mobiles, laptops, large and
             small appliances, furniture, electronics and watches, you can now shop
             without burning a hole in your pocket. If youve been eyeing a product
             for a long time, chances are it may be up for a no cost EMI. Take a
             look ASAP! Terms and conditions apply.
           </p>
     
           <h5>EMI on Debit Cards</h5>
           <p>
             Did you know debit card holders account for 79.38 crore in the
             country, while there are only 3.14 crore credit card holders? After
             enabling EMI on Credit Cards, in another attempt to make online
             shopping accessible to everyone, Flipkart introduces EMI on Debit
             Cards, empowering you to shop confidently with us without having to
             worry about pauses in monthly cash flow. At present, we have partnered
             with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this
             facility. More power to all our shoppers! Terms and conditions apply.{" "}
           </p>
       
           <h5>Mobile Exchange Offers</h5>
           <p>
             Get an instant discount on the phone that you have been eyeing on.
             Exchange your old mobile for a new one after the Flipkart experts
             calculate the value of your old phone, provided it is in a working
             condition without damage to the screen. If a phone is applicable for
             an exchange offer, you will see the Buy with Exchange option on the
             product description of the phone. So, be smart, always opt for an
             exchange wherever possible. Terms and conditions apply.{" "}
           </p>
          
           <h5>What Can You Buy From Flipkart?</h5>
           <h5>Mobile Phones</h5>
           <p>
             From budget phones to state-of-the-art smartphones, we have a mobile
             for everybody out there. Whether youre looking for larger, fuller
             screens, power-packed batteries, blazing-fast processors,
             beautification apps, high-tech selfie cameras or just large internal
             space, we take care of all the essentials. Shop from top br/ands in
             the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor
             to name a few. Rest assured, you re buying from only the most reliable
             names in the market. Whats more, with Flipkarts Complete Mobile
             Protection Plan, you will never again find the need to run around
             service centres. This plan entails you to a number of post-purchase
             solutions, starting at as low as Rupees 99 only! br/oken screens,
             liquid damage to phone, hardware and software glitches, and
             replacements -<b>the Flipkart Complete Mobile Protection</b>
             covers a comprehensive range of post-purchase problems, with
             door-to-door services.{" "}
           </p>
         
           <h5>Electronic Devices and Accessories</h5>
           <p>
             When it comes to laptops, we are not far behind. Filter among dozens
             of super-fast operating systems, hard disk capacity, RAM, lifestyle,
             screen size and many other criterias for personalized results in a
             flash. All you students out there, confused about what laptop to get?
             Our
             <b>Back To College Store</b>
           </p>
           <p>
             segregates laptops purpose wise (gaming, browsing and research,
             project work, entertainment, design, multitasking) with
             recommendations from top brands and industry experts, facilitating a
             shopping experience that is quicker and simpler.
           </p>
         
           <p>
             Photography lovers, you couldn t land at a better page than ours.
             Cutting-edge DSLR cameras, ever reliable point-and-shoot cameras,
             millennial favourite instant cameras or action cameras for adventure
             junkies: our range of cameras is as much for beginners as it is for
             professionals. Canon, Nikon, GoPro, Sony, and Fujifilm are some big
             names you ll find in our store. Photography lovers, you couldn t land
             at a better page than ours. Cutting-edge DSLR cameras, ever reliable
             point-and-shoot cameras, millennial favourite instant cameras or
             action cameras for adventure junkies: our range of cameras is as much
             for beginners as it is for professionals. Canon, Nikon, GoPro, Sony,
             and Fujifilm are some big names you ll find in our store.{" "}
           </p>
          
           <p>
             Turn your home into a theatre with a stunning surround sound system.
             Choose from our elaborate range of Sony home theatres, JBL soundbars
             and Philips tower speakers for an experience to remember.
           </p>
         
           <p>
             How about jazzing up your phone with our quirky designer cases and
             covers? Our wide-ranging mobile accessories starting from headphones,
             power banks, memory cards, mobile chargers, to selfie sticks can prove
             to be ideal travel companions for you and your phone; never again
             worry about running out of charge or memory on your next vacation.
           </p>
           
           <h5>Large Appliances</h5>
           <p>
             Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful
             washing machines - discover everything you need to run a house under
             one roof. Our
             <b>Dependable TV and Appliance Store</b>
             ensures zero transit damage, with a replacement guarantee if anything
             goes wrong; delivery and installation as per your convenience and a
             double warranty (Official brand Warranty along with an extended
             Flipkart Warranty) - rest assured, value for money is what is promised
             and delivered. Shop from market leaders in the country like Samsung,
             LG, Whirlpool, Midea, Mi, Vu, Panasonic, Godrej, Sony, Daikin, and
             Hitachi among many others.
           </p>
       
           <p>
             For certain product categories, Customers meeting the eligibility
             criteria will have the option to buy larger quantities. To know more
             on the eligibility criteria and terms and conditions, please reach out
             to
             <a href="mailto:Purchases.oni@flipkart.com">
               Purchases.oni@flipkart.com
             </a>
           </p>
   
           <h5>Small Home Appliances</h5>
           <p>
             Find handy and practical home appliances designed to make your life
             simpler: electric kettles, OTGs, microwave ovens, sandwich makers,
             hand blenders, coffee makers, and many more other time-saving
             appliances that are truly crafted for a quicker lifestyle. Live life
             king size with these appliances at home.
           </p>
           
           <h5>Lifestyle</h5>
           <p>
             Flipkart,
             <b> India ka Fashion Capital </b>, is your one-stop fashion
             destination for anything and everything you need to look good. Our
             exhaustive range of Western and Indian wear, summer and winter
             clothing, formal and casual footwear, br/idal and artificial
             jewellery, long-lasting make-up, grooming tools and accessories are
             sure to sweep you off your feet. Shop from crowd favourites like Vero
             Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and
             Sephora among dozens of other top-of-the-ladder names. From summer
             staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani
             kurtis to street-smart biker jackets, you can rely on us for a
             wardrobe that is up to date. Explore our in-house br/ands like
             Metronaut, Anmi, and Denizen, to name a few, for carefully curated
             designs that are the talk of the town. Get ready to be spoiled for
             choice.Festivals, office get-togethers, weddings, br/unches, or
             nightwear - Flipkart will have your back each time.
           </p>
          
           <h5>Home and Furniture</h5>
           <p>
             Moving to a new place is never easy, especially if you re buying new
             furniture. Beds, sofa sets, dining tables, wardrobes, and TV units -
             it s not easy to set up everything again. With the hundreds of options
             thrown at you, the ride could be overwhelming. What place is reliable,
             what furniture will stand the test of time? These are questions you
             must ask before you choose a store. Well, our
             <b>Durability Certified Furniture Store</b>
             has not only curated a range of furniture keeping in mind the modern
             Indian consumer but furniture that comes with a lab certification,
             ensuring they last you for up to 10 years. Yes, all our furniture has
             gone through 35 stability and load tests so that you receive only the
             best-quality furniture.
             <b>Be FurniSure</b>, always. Names to look out for are Nilkamal,
             Godrej Interio, Urban Ladder, HomeTown, Durian and Perfect Homes.
           </p>
         
           <p>
             You may have your furniture all set up, but they could end up looking
             flat and incomplete without complementary decor. Curtains, cushion
             covers, bed sheets, wall shelves, paintings, floor lamps - find
             everything that turns a house to an inviting home under one roof at
             Flipkart.
           </p>
         
           <h5>Baby and Kids</h5>
           <p>
             Your kids deserve only the best. From bodysuits, booties, diapers to
             strollers, if you re an expecting mother or a new mother, you will
             find everything you need to set sail on a smooth parenting journey
             with the help of our baby care collection. When it comes to safety,
             hygiene and comfort, you can rely on us without a second thought.
             Huggies, Pampers, MamyPoko, and Johnson &amp; Johnson: we host only
             the most-trusted names in the business for your baby.
           </p>
          
           <h5>Books, Sports and Games</h5>
           <p>
             Work hard and no play? We don t believe in that. Get access to
             best-selling fiction and non-fiction books by your favourite authors,
             thrilling English and Indian blockbusters, most-wanted gaming
             consoles, and a tempting range of fitness and sports gadgets and
             equipment bound to inspire you to get moving.
           </p>
           <br />
           <h5>Grocery/Supermart</h5>
           <p>
             Launching into the grocery vertical, Flipkart introduces
             <b>Supermart</b>
             that is out to bring everyday essentials close to you. From pulses,
             spices, dairy, personal and sanitary care, breakfast essentials,
             health drinks, spreads, ready to cook, grooming to cleaning agents, we
             are happy to present everything you need to run a house. Now buy
             Grocery products for as low as 1 Rupee only - our
             <b>1 Rupee Store</b>
             presents new products every day for a nominal price of 1 Rupee only.
             Terms and conditions apply.
           </p>
           </div>
         </div>
         </footer>
        
    </div>
     
    </>
   
  )
}
