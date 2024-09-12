import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from './components/navbar/Navbar';
import { Types } from "./components/hero/Types"
import Sign from './components/user/Sign';
import Login from './components/user/Login';
import Otp from './components/user/Otp'
import OtpLog from './components/user/OtpLog'
import Footer from './components/navbar/Footer';
import Profile from './components/user/Profile';


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
          <Route path='/otplog' element={<OtpLog/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App