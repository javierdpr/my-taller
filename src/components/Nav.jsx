import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import logo from '../img/logo/logo.png' 


const Nav = () =>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    return(
        <>
        <div className='header'>
            <div className='nav'>
                <div>
                    {/* Consistent width with App.css .header img, though CSS should ideally control this */}
                    <img width="100px" src={logo}/>
                </div>
                <button className="hamburger-menu" onClick={toggleMobileMenu}>
                    {/* Icon will be added via CSS */}
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`enlaces ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
                    <nav>
                        <Link className="enlace" to="/"> Home </Link>
                        <Link className="enlace" to="/restauration"> restauracion </Link>
                        <Link className="enlace" to="/galery"> Galeria </Link>
                        <Link className="enlace" to="/contact"> contacto </Link>
                    </nav>
                        <Outlet />
                </div>
                
            </div>
            <div className="redessociale">
                <FacebookIcon/>
                <InstagramIcon/>
            </div>
        </div>
        
        </>
        
    )

}

export default Nav;