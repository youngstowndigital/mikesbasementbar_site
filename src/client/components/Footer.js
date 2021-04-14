import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="top-footer">
                </div>
                <div className="main-footer">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about">
                                <h4 className="footer-title">About Mikes Basement</h4>
                                <p>Mikes Basement Bar</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="more-info">
                                <h4 className="footer-title">More info</h4>
                                <p>Located in the heart of Poland, Ohio.</p>
                                <ul>
                                    <li><i className="fa fa-phone"></i>614-301-6256</li>
                                    <li><i className="fa fa-globe"></i>2693 Algonquin Drive Poland, Ohio 44514</li>
                                    <li><i className="fa fa-envelope"></i><a href="#">mikewittenauer@me.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <p>Copyright © 2021 <a href="/">Mikes Basement Bar</a></p>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
