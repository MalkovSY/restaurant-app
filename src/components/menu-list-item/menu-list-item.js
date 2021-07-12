import React from 'react';
import { Link } from 'react-router-dom';

import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category, icon, id} = menuItem;

    return (
        <>
            <li className="menu__item">
                <Link to={`/${id}`}>
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span> <img className="menu__icon" src={icon} alt={title}/></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button onClick={(e) => {
                        e.preventDefault();
                        onAddToCart();
                    }} 
                            className="menu__btn">Add to cart</button>
                </Link>
            </li>
        </>
    )
}

export default MenuListItem;