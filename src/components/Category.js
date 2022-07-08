import React, { useEffect, useState } from "react";
import "./Category.css";

// const dataBase = [
//   {
//     item: {
//       imageUrl: "cloth.png",
//       alt: "Apollo Running short",
//     },
//     id: 1,
//     description: "Apollo running short",
//     price: "$50",
//   },

//   {
//     item: {
//       imageUrl: "cloth.png",
//       alt: "Apollo Running short",
//     },
//     id: 2,
//     description: "Apollo running short",
//     price: "$50",
//   },

//   {
//     item: {
//       imageUrl: "cloth.png",
//       alt: "Apollo Running short",
//     },
//     id: 3,
//     description: "Apollo running short",
//     price: "$50",
//   },

//   {
//     item: {
//       imageUrl: "cloth.png",
//       alt: "Apollo Running short",
//     },
//     id: 4,
//     description: "Apollo running short",
//     price: "$50",
//   },
// ];



const Category = (props) => {
  return (
    <div className="card">
      <div className="card-content" onClick={props.onCategoryClick}>
        <img
          src={props.productImage}
          alt={props.productImageAlt}
          className="card-image"
        />
        <p className="card-description">{props.productName}</p>
        <p className="card-price">
          <span>{props.productCurrency}</span>
          <span>{props.productAmount}</span>
        </p>
      </div>
    </div>
  );
};

export default Category;
