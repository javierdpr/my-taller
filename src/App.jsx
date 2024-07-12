import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css'
import Restauration from "./pages/restauration";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Galery from "./pages/Galery"

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
