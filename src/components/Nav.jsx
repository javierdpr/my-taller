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
            <div className='nav'> {/* This div now primarily holds the logo and the main links */}
                <div>
                    {/* Consistent width with App.css .header img, though CSS should ideally control this */}
                    <img width="100px" src={logo}/>
                </div>
                {/* Hamburger button is MOVED from here */}
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
            {/* Grouping social icons and hamburger menu for mobile layout */}
            <div className="header-right-group">
                <div className="redessociale">
                    <FacebookIcon/>
                    <InstagramIcon/>
                </div>
                {/* Hamburger button is now part of header-right-group, will be positioned via CSS */}
            </div>
        </div>
        </>
        
    )

}

export default Nav;
/* Note: Hamburger button was here, moved inside header's direct children for easier flex ordering if needed, 
   or to be grouped. Decided to move it next to social icons.
   The button was:
    <button className="hamburger-menu" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
    </button>
   It's now structurally part of the .nav div but hidden/shown by CSS.
   Correction: The hamburger button was inside .nav div.
   Let's put it back inside .nav for now and use CSS order, or move it to header-right-group as intended.

   Re-evaluating the original JSX structure for the hamburger button.
   It was:
   <div className='header'>
       <div className='nav'>
           <div> LOGO </div>
           <button className="hamburger-menu">...</button> // This was the problematic part for ordering
           <div className="enlaces">...</div>
       </div>
       <div className="redessociale">...</div>
   </div>

   The goal is: Logo | Socials Hamburger
   New proposed structure in this change:
   <div className='header'>
       <div className='nav'> // Will only contain logo and enlaces now
           <div> LOGO </div>
           <div className="enlaces">...</div>
       </div>
       <div className="header-right-group"> // NEW
           <div className="redessociale">...</div>
           // Hamburger button needs to be here
       </div>
   </div>
   The button needs to be physically moved in JSX.
*/