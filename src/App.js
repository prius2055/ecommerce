import React from "react";
import { Route } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader";
import AllCategory from "./Pages/AllCategory";
import TechCategory from "./Pages/TechCategory";
import ClothCategory from "./Pages/ClothCategory";
import { useEffect, useState } from "react";
import "./App.css";
import AllProductDetail from "./Pages/AllProductDetail";

const QUERY_RESULT = ` {
  categories {
    name
    products {
      name,
      inStock,
      gallery,
      attributes{
        name,
        items{
          value,

        }
      },
      prices{
       currency{
        symbol
       },
       amount
      },
      brand
    }
  }
}`;

const App = () => {
  const [products, setProducts] = useState(
    [
      { name: "all", products: {} },
      { name: "tech", products: {} },
      { name: "clothes", products: {} },
    ],
    []
  );

  useEffect(() => {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        query: QUERY_RESULT,
      }),
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.data.categories));
  }, []);

  console.log(products[0].products);

  return (
    <div className="app">
      <MainHeader />

      <Route path="/allproductcategory">
        <AllCategory allProducts={products[0]} />
      </Route>
      <Route path="/clothproductcategory">
        <ClothCategory clothProducts={products[1]} />
      </Route>
      <Route path="/techproductcategory">
        <TechCategory techProducts={products[2]} />
      </Route>

      <Route path="/allproductdetail/:productid">
        <AllProductDetail allProducts={products[0]} />
      </Route>
    </div>
  );
};
export default App;
