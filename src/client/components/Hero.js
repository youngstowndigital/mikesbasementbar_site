import React from 'react';

const Hero = () => {
    return (
        <div id="slider">
            <div className="flexslider">
                <ul className="slides">
                    <li>
                        <div className="slider-caption">
                            <h1>Good Food. Good Drinks. Better Times.</h1>
                            <p>At Mikes Basement Bar leave your worries at the door.</p>
                        </div>
                        <img src="images/slide7.jpg" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Hero;
