// import { Link } from 'react-scroll'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function NavBar(){
    return (
        <div className="navbar">
            <div>
            <Link to='/'><img src={logo} alt="logo clé du tregor" /></Link>
               
            </div>
            <div>
                <ul>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </ul>
            </div>
            
        </div>
    )
}
export default NavBar