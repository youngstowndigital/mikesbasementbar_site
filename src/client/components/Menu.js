import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { getMenuItems, getMenuCategories } from '../apiUtil';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [menuCategories, setMenuCategories] = useState([]);
    const [selectedMenuItems, setSelectedMenuItems] = useState([]);

    const loadMenuItems = async () => {
        try {
            const items = await getMenuItems();
            setMenuItems(items);
            setSelectedMenuItems(items);
        } catch (error) {
            console.error(error.message);
        }
    }

    const loadMenuCategories = async () => {
        setMenuCategories(await getMenuCategories());
    }

    useEffect(() => {
        loadMenuCategories();
        loadMenuItems();
    }, [])

    const changeCategory = (e) => {
        const category = e.target.id.toLowerCase();
        setSelectedMenuItems(menuItems.filter(item => item.menu_categories[0].name.toLowerCase() == category));
    }

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
                            {
                                menuCategories.map(category => {
                                    return <li key={category.id} onClick={changeCategory}><span className="filter" id={category.name.toLowerCase()}>{category.name}</span></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="row" id="Container">
                    {
                        selectedMenuItems.map(item => {
                            return <MenuItem key={item.id} category={item.menu_categories[0].name.toLowerCase()} name={item.name} image={item.image[0].url} />
                        })
                    }
                </div>  
            </div>
        </div>
    );
}

export default Menu;
