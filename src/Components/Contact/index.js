import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./contact.css" ;

const Contact = ()=>{
    return (
        <div className="contact" id="contact">
            <div className="container">
                <h2 className="special-h">Contact</h2>
                <p>We are here to help</p>
                <div className="contact-info">
                    <p>Feel free to drop us a line at : </p>
                    <a href="mailto:fiky.link@gmail.com">fiky.link@gmail.com</a>
                    <div className="social">
                        Find us on social networks:
                        <a href="#1"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#2"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#3"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#4"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Contact ;

