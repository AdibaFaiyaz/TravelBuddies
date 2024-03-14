import './App.css'
import Hero from './Components/Hero/Hero'
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Services from './Components/Our Services/Services';
import Vehicles from './Components/Our Vehicles/Vehicles';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


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
        </Routes>
      </HashRouter>
    </div>
    </>
  )
}

export default App
