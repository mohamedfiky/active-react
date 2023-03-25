import React from "react";

import "./contact-form.css";

const ContactForm = ()=>{
    return (
        <div className="contact-form">
            <div className="overlay"></div>
            <div className="container">
                <h2>Contact Us</h2>
                <form>
                    <div className="left">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your E-mail" />
                        <input type="tel" placeholder="Phone Number" />
                    </div>
                    <div className="right">
                        <textarea placeholder="Type Your Issue Here"></textarea>
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default ContactForm ;