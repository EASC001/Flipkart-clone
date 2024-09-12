import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Types } from "./components/hero/Types"
import Sign from './components/user/Sign';
import Login from './components/user/Login';
import Otp from './components/user/Otp'
import Footer from './components/navbar/Footer';
import Profile from './components/user/Profile';
import Phone from './components/pages/Phone';
import Airpods from './components/pages/Airpods';
import Fridge from './components/pages/Fridge';
import Washing from './components/pages/Washing';
import Giftcard from './components/user/Giftcard';
import Watch from './components/pages/Watch';
import Bluetooth from './components/pages/Bluetooth';
import Powerbank from './components/pages/powerbank';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Types />}></Route>
          <Route path='/signup' element={<Sign />} />
          <Route path='/login' element={<Login />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/gift' element={<Giftcard/>}/>
          <Route path='/realme' element={<Phone/>}/>
          <Route path='/airpods' element={<Airpods/>}/>
          <Route path='/fridge' element={<Fridge/>}/>
          <Route path='/wash' element={<Washing/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/bluetooth' element={<Bluetooth/>}/>
          <Route path='/powerbank' element={<Powerbank/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
