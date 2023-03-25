import React from "react";
import {NavLink} from "react-router-dom";
import "./nav-bar.css" ;



const Nav = () =>{

    const toggleOpen = () =>{
            let toggleMenu = document.querySelector(".nav-bar .links-btn .toggle-menu");
            toggleMenu.classList.toggle("open");
    };

    return (
      <div className="nav-bar">
          <div className="container" >
              <NavLink exact to="/" className="logo">
                  <img src="./images/logo.png" />
              </NavLink>
              <div className="nav-links">
                  <ul>
                      <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                      <li><NavLink activeClassName="active" exact to="/about-us">About Us</NavLink></li>
                      <li><NavLink activeClassName="active" exact to="/portfolio">Portfolio</NavLink></li>
                      <li><NavLink activeClassName="active" exact to="/blog">Blog</NavLink></li>
                      <li><NavLink activeClassName="active" exact to="/contact-us">Contact Us</NavLink></li>
                  </ul>
              </div>
              <div className="links-btn" onClick={toggleOpen}>
                  <div className="icon">
                          <span></span>
                          <span></span>
                          <span></span>
                  </div>
                  <ul className="toggle-menu">
                      <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                      <li><NavLink activeClassName="active" exact to="/about-us">About Us</NavLink></li>
                      <li><NavLink activeClassName="active" exact to="/portfolio">Portfolio</NavLink></li>
                      <li><NavLink activeClassName="active" exact to="/blog">Blog</NavLink></li>
                      <li><NavLink activeClassName="active" exact to="/contact-us">Contact Us</NavLink></li>
                  </ul>
                  
              </div>
          </div>
      </div>
  )

}


export default Nav ;


