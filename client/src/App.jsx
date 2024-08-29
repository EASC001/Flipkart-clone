
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import {Types}  from "./components/hero/Types"





function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Types/>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
