import React from "react";

import "./about.css" ;

const About = ()=>{
    return (
        <div className="about" id="about">
            <div className="container">
                <h2 className="special-h">About</h2>
                <p>Less Is More Work</p>
                <div className="about-content">
                    <div className="image">
                        <img src="images/about.jpg" />
                    </div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet nostrum 
                            assumenda possimus sed, a ullam aperiam voluptatum temporibus perferendis at incidunt,
                            voluptas cumque. Perferendis error quaerat rerum natus modi?
                        </p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, illum?
                            Aperiam magni temporibus quod velit ipsum dolor sit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Harum, illum?  Aperiam magni temporibus quod velit?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About ;

