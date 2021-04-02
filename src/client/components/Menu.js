import React from 'react';
import MenuItem from './MenuItem';

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
                        <ul id="filters">
                            <li><span className="filter" data-filter="all">All</span></li>
                            <li><span className="filter" data-filter=".food">Food</span></li>
                            <li><span className="filter" data-filter=".drinks">Drinks</span></li>
                            <li><span className="filter" data-filter=".dessert">Dessert</span></li>
                        </ul>
                    </div>
                </div>
                <div className="row" id="Container">
                    <MenuItem category="food" name="Pizza" image="pizza.jpg" />
                    <MenuItem category="food" name="Wings" image="buffalo-chicken-dip.jpg" />
                    <MenuItem category="food" name="Buffalo Chicken Dip" image="buffalo-chicken-dip.jpg" />
                    <MenuItem category="drinks" name="Beer" image="buffalo-chicken-dip.jpg" />
                    <MenuItem category="drinks" name="Wine" image="buffalo-chicken-dip.jpg" />
                    <MenuItem category="drinks" name="Silent Seven" image="buffalo-chicken-dip.jpg" />
                    <MenuItem category="dessert" name="Cookies" image="buffalo-chicken-dip.jpg" />
                    <MenuItem category="dessert" name="Brownies" image="buffalo-chicken-dip.jpg" />
                </div>  
            </div>
        </div>
    );
}

export default Menu;
