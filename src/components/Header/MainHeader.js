import React from "react";
import { NavLink } from "react-router-dom";

import arrowDown from "../icons/arrowDown.svg";
import cart from "../icons/cart.svg";
import circleLeft from "../icons/circleLeft.svg";
import circleRight from "../icons/circleRight.svg";
import dollar from "../icons/dollar.svg";
import arrowUp from "../icons/arrowUp.svg";
import shoppingBag from "../icons/shoppingBag.svg";
import arc from "../icons/arc.svg";

import "./MainHeader.css";

const MainHeader = () => {
  return (
    <div className="header">
      <ul className="header-category">
        <li>
          <NavLink to="/allproductcategory" activeClassName="active">
            all
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothproductcategory" activeClassName="active">
            clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/techproductcategory" activeClassName="active">
            tech
          </NavLink>
        </li>
      </ul>

      <div className="header-logo">
        <img src={shoppingBag} alt="shopping" />
        <img src={arc} alt="shopping" />
        <img src={arrowUp} alt="shopping" />
      </div>

      <div className="header-action">
        <img src={dollar} alt="currency" className="header-action_dollar" />
        <img src={arrowDown} alt="arrowDown" className="header-action_arrow" />
        <div className="header-action_cart-group">
          <img src={cart} alt="cart" className="header-action_cart" />
          <div className="header-action_cart-group-circle">
            <img
              src={circleLeft}
              alt="cart"
              className="header-action_cart-group-circle-left"
            />
            <img
              src={circleRight}
              alt="cart"
              className="header-action_cart-group-circle-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
