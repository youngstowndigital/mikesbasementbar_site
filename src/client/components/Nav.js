import React from 'react';

const Nav = () => {
    return (
        <header>
            <div id="top-header">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </div>
            <div id="main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="logo">
                                <a href="#"><img src="images/logo.png" title="Grill Template" alt="Grill Website Template" /></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="main-menu">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about-us.html">About</a></li>
                                    <li><a href="products.html">Products</a></li>
                                    <li><a href="contact-us.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nav;
