import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../img/logo/logo.png'

import { Outlet, Link } from "react-router-dom";

const Footer = () =>{
    

            return (
                
                <div className='footer'>
                    <div >
                    <nav>
                <ul>
                <div className='title'>
                <h2>Enlaces</h2>
                </div>
                    <li>
                        <Link className="enlace" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="enlace" to="/restauration">restauration</Link>
                    </li>
                    <li>
                        <Link className="enlace" to="/galery">Galeria</Link>
                    </li>
                    <li>
                        <Link className="enlace" to="/contact">contacto</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
                    </div>
                    <div className='logofooter'>
                    <div className='title'>
                        <h2>American Garage</h2>
                    </div>
                        <img src={logo}/>
                    </div>
                    <div className='iconsfooter'>
                    <div className='title'>
                        <h2>Redes Sociales</h2>
                    </div>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    </div>
                </div>                                                                 
            )
        }
    

export default Footer;