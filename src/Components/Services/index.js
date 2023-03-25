import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faLaptop, faLaptopCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import "./services.css";

const Services = ()=>{
    return (
        <div className="services" id="services">
            <div className="container">
                <h2 className="special-h">Services</h2>
                <p>What we can do</p>
                <div className="services-content">
                    <div className="col">
                        <div className="srv">
                            <FontAwesomeIcon icon={faPalette} />
                            <div className="text">
                                <h3>Graphic Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolore maiores?</p>
                            </div>
                        </div>
                        <div className="srv">
                            <FontAwesomeIcon icon={faEdit} />
                            <div className="text">
                                <h3>UI & UX</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolore maiores?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="srv">
                            <FontAwesomeIcon icon={faLaptop} />
                            <div className="text">
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolore maiores?</p>
                            </div>
                        </div>
                        <div className="srv">
                            <FontAwesomeIcon icon={faLaptopCode} />
                            <div className="text">
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolore maiores?</p>
                            </div>
                        </div> 
                    </div>
                    <div className="col">
                        <div className="image">
                            <img src="images/bike.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services ;

