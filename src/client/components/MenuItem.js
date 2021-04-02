import React from 'react';

const MenuItem = ({ category, name, image }) => {
    return (
        <div className={ `col-md-3 col-sm-6 mix portfolio-item ${category}` }>       
            <div className="portfolio-wrapper">                
                <div className="portfolio-thumb">
                    <img src={ `images/${image}` } alt="" />
                    <div className="hover">
                        <div className="hover-iner">
                            <a className="fancybox" href={ `images/${image}` }><img src="images/open-icon.png" alt="" /></a>
                            <span>{ category }</span>
                        </div>
                    </div>
                </div>  
                <div className="label-text">
                    <h3><a href="single-post.html">{ name }</a></h3>
                </div>
            </div>          
        </div>
    );
}

export default MenuItem;
