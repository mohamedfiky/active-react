import React from "react";
import {NavLink} from "react-router-dom";

import "./portfolio.css" ;

const Portfolio = ()=>{

    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="special-h">Portfolio</h2>
                <p>Some of our amazing projects</p>

                <div className="portfolio-content">
                    <div className="card">
                        <img src="images/work01.png" />
                        <div className="card-info">
                            <h3>Casata Salsabil</h3>
                            <p>Sit amet consectetur adipisicing elit. Totam, esse perferendis?</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/work02.png" />
                        <div className="card-info">
                            <h3>Haliba Fahla</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/work03.png" />
                        <div className="card-info">
                            <h3>Tamro Hindi</h3>
                            <p>Ipsum dolor sit amet consectetur adipisicing elit. Doloremque magnam amet. </p>
                        </div>
                    </div>
                
                </div>

                <NavLink exact to="/portfolio">More Projects</NavLink>
            </div>
        </div>
    )
}



export default Portfolio ;

