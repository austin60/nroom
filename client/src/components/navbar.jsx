import React,{Component} from 'react';
import {HiMenu } from "react-icons/hi";
import {NavLink} from 'react-router-dom';



class Navbar extends Component{
    display=()=>{
       const menuitems=document.querySelector('.menu-items');

       menuitems.classList.toggle('show')
    }
    render(){
       
        return(
            <div className='nav'>
               <div className='logo'>NEWSROOM</div>
               <div className='buger'><HiMenu size="25px" color='#F1F1F1' onClick={this.display}/></div>
               <div className='menu-items'>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/developing">Developing</NavLink></li>
                    <li><NavLink to="/politics">Politics</NavLink></li>
                    <li ><NavLink to="/business">Business</NavLink></li>
                    <li><NavLink to="/sports">Sports</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
               </div>
            </div>
        )
    }
}
export default Navbar