import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "./footer.css" ;

const Footer = ()=>{
    return (
        <div className="footer">
            Made with <FontAwesomeIcon icon={faHeart} /> by: 
            <a href="https://www.linkedin.com/in/mohamedfiky/" target="_blank">M-Fiky</a>- 
            All Rights Reserved &copy; 2023
                  
        </div>

    )
}

export default Footer ;

