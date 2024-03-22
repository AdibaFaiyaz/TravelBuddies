import './App.css'
import Hero from './Components/Hero/Hero'
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Services from './Components/Our Services/Services';
import Vehicles from './Components/Our Vehicles/Vehicles';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Search from './Components/Search/Search';
import Rate from './Components/Rate/Rate';

function App() {
  

  return (
    <>
     <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vehicles" element={<Vehicles/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Rate" element={<Rate/>}/>
        </Routes>
      </HashRouter>
    </div>
    </>
  )
}

export default App
