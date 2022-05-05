import React from "react";

import './menu.css'

const MenuAnimation = () => {
    return (
        <>
            <input type="checkbox" id="menu-toggle"/>
            <label for='menu-toggle' className="hamburger">
                <span className="bun bun-top">
                    <span className="bun-crust bun-crust-top"></span>
                </span>
                <span className="bun bun-bottom">
                    <span className="bun-crust bun-crust-bottom"></span>
                </span>
            </label>
        </>
    )
}

export default MenuAnimation
