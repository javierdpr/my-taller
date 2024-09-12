import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css'
import Restauration from "./pages/restauration";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Galery from "./pages/Galery"

/*
el home hacer algun camcbio meterr alguna imagen 
imagen de la puerta del taller
va con doble click
el contacto meterle algo guapo con las etiquetas
*/
function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Nav/>}/>
          <Route index element={<Home />} />
          <Route path="restauration" element={<Restauration />} />
          <Route path="contact" element={<Contact />} />
          <Route path="galery" element={<Galery />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
