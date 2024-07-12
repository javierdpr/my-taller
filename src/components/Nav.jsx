import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Outlet, Link } from "react-router-dom";

import logo from '../img/logo/logo.png' 


const Nav = () =>{
    
    return(
        <>
        <div className='header'>
            <div className='nav'>
                <div>
                    <img width="10px" src={logo}/>
                </div>
                <div className="enlaces">
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