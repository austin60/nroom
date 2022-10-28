import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import {HiMenu } from "react-icons/hi";

class AdminNav extends Component{
    display=()=>{
        const menuitems=document.querySelector('.menu-items');
 
        menuitems.classList.toggle('show')
     }
    render(){
        return(
            <div className='nav'>
            <div className='logo'>NewsRoom</div>
            <div className='buger'><HiMenu size="25px" color='#F1F1F1' onClick={this.display}/></div>
            <div className='menu-items'>
             <ul>
                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/admin/create">Create</NavLink></li>
                 <li><NavLink to="/admin/manage">Manage</NavLink></li>
             </ul>
            </div>
         </div>
        )
    }
}
export default AdminNav