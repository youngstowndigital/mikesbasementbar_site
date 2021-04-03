import React from 'react';

const MenuItem = ({ category, name, image }) => {
    const imageBaseUrl = process.env.IMAGE_BASE_URL;

    return (
        <div className={ `col-md-3 col-sm-6 ${category}` }>       
            <div>                
                <div className="portfolio-thumb">
                    <img src={ `${imageBaseUrl}${image}` } alt="" />
                    <div className="hover">
                        <div className="hover-iner">
                            <a href={ `${imageBaseUrl}${image}` }><img src="images/open-icon.png" alt="" /></a>
                            <span>{ category }</span>
                        </div>
                    </div>
                </div>  
                <div className="label-text">
                    <h3>{ name }</h3>
                </div>
            </div>          
        </div>
    );
}

export default MenuItem;
