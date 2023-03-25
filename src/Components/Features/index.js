import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLightbulb, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import "./features.css";

const Features = ()=>{
    return (
        <div className="features" id="features">
            <div className="container">
                <div className="feat">
                    {/* <FontAwesomeIcon icon="fa-brands fa-hubspot" /> ده اللى بيتاخد كوبى من 
                        !موقع ال " فونت أوسم " نفسه , وغلط ما بيشتغلش */}
                    <FontAwesomeIcon icon={faLightbulb} />
                    <h3>Tell Us Your Idea</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, veritatis commodi.</p>
                </div>
                <div className="feat">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <h3>We Will Do All The Work</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur.</p>
                </div>
                <div className="feat">
                    <FontAwesomeIcon icon={faGlobe} />
                    <h3>Your Product Is World Wide</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti.</p>
                </div>
            </div>
        </div>
    )
}

export default Features ;

