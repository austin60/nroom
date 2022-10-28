import React,{Component} from 'react';
import { FaFacebookF,FaInstagram,FaTwitter,FaSnapchatGhost,FaWhatsapp} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

class Mfooter extends Component{
    render(){
        return(
            <div className='mfooter'>
                <div className="mfooter-info">
                <div className="footer-logo info">
                    <h3>NEWSROOM</h3>
                    <p><b>Contact</b><br/>
                     0703303223 < FaWhatsapp/><br/>okongoaustine@gmail.com</p>
                </div>
                <div className="sitemap info">
                    <h3><u>Site Map</u></h3>
                    <ul>
                        <li>Careers</li>
                        <li>Out Team</li>
                        <li>Report</li>
                        <li>Advertise</li>
                        <li><NavLink to="/admin/create">Admin</NavLink></li>
                    </ul>
                </div>
                <div className="sub-socials info">
                    <h3><u> News Letter</u></h3>
                    <form action="">
                        <p>subscribe to daily news letters and stay informed</p>
                        <input type="text" placeholder='enter email'/>
                        <button>subscribe</button>
                    </form>
                    <div className='socials'>
                        <h5>follow us</h5>
                        <ul>
                            <li><FaFacebookF/></li>
                            <li><FaTwitter/></li>
                            <li><FaInstagram/></li>
                            <li><FaSnapchatGhost/></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="copyrights">
                    <p>copyright c 2022</p>
                </div>
            </div>
        )
    }
}
export default Mfooter