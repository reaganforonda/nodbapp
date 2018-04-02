import React from "react";
import './CSS/reset.css';
import "./CSS/header.css";
import Geolocation  from './Geolocation';

function Header() {
  return (
    <div>
      <header className="header">
        <h1>WEATHER<br/><i className="sun far fa-sun fa-2x fa-spin"></i> APP</h1>
        <div className='geo'>
        <Geolocation/>
          </div>
      </header>
      
    </div>
  );
}

export default Header;
