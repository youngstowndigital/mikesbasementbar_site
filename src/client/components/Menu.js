import React from 'react';

const Menu = () => {
    return (
        <div id="products-post">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="product-heading">
                            <h2>What's on the Menu?</h2>
                            <img src="images/under-heading.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="filters col-md-12 col-xs-12">
                        <ul id="filters" className="clearfix">
                            <li><span className="filter" data-filter="all">All</span></li>
                            <li><span className="filter" data-filter=".ginger">Ginger</span></li>
                            <li><span className="filter" data-filter=".pizza">Pizza</span></li>
                            <li><span className="filter" data-filter=".pasta">Pasta</span></li>
                            <li><span className="filter" data-filter=".drink">Drink</span></li>
                            <li><span className="filter" data-filter=".hamburger">Hamburger</span></li>
                        </ul>
                    </div>
                </div>
                <div className="row" id="Container">
                    <div className="col-md-3 col-sm-6 mix portfolio-item Pizza">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product1.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product1_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Pizza</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Vege Pizza</a></h3>
                                <span className="text-category">$16.00</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item ginger">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product2.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product2_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Ginger</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Ginger Tea</a></h3>
                                <span className="text-category">$24.00</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item pizza">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product3.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product3_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Pizza</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Fresh Salad</a></h3>
                                <span className="text-category">$12.00</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item pasta">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product4.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product4_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Pasta</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Healthy Herbal Tea</a></h3>
                                <span className="text-category">$8.00</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item drink">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product5.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product5_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Drink</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Fruit Salad</a></h3>
                                <span className="text-category">$12.50</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item hamburger">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product6.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product6_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Hamburger</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Spicy Hamburger</a></h3>
                                <span className="text-category">$7.50</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item pizza">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product7.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product7_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Pizza</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Chocolate Cake</a></h3>
                                <span className="text-category">$16.00</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item pasta">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product8.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product8_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Pasta</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Berry Taste</a></h3>
                                <span className="text-category">$15.00</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item hamburger">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product3.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product3_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Hamburger</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Onion Grilled</a></h3>
                                <span className="text-category">$16.00</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item drink">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product2.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product2_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Drink</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Another Ginger</a></h3>
                                <span className="text-category">$18.00</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item ginger">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product1.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product1_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Ginger</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Mocha Coffee</a></h3>
                                <span className="text-category">$16.00</span>
                            </div>
                        </div>          
                    </div>
                    <div className="col-md-3 col-sm-6 mix portfolio-item pasta">       
                        <div className="portfolio-wrapper">                
                            <div className="portfolio-thumb">
                                <img src="images/product6.jpg" alt="" />
                                <div className="hover">
                                    <div className="hover-iner">
                                        <a className="fancybox" href="images/product6_big.jpg"><img src="images/open-icon.png" alt="" /></a>
                                        <span>Pasta</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="label-text">
                                <h3><a href="single-post.html">Dessert Time</a></h3>
                                <span className="text-category">$16.00</span>
                            </div>
                        </div>          
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Menu;
