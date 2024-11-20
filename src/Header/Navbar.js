import React, { Component } from 'react';
import logo from '../Logo.png';

class Navbar extends Component{
  render() {
    return(
          <div className='navbar flex row'>
         <div className='logo'>
             <img src={logo} alt="Logo_Image" className="logo" />
        </div>
       <ul className='flex row'>
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Pages</li>
        <li>About Us</li>
        <li>Contact US</li>
      </ul>
      </div>
    
    )
  }
}
export default Navbar;
