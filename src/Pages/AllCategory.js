import AllProductList from "../components/Products/AllProductList";
import "./Category.css";

const AllCategory = (props) => {
  const allProductArray = Object.values(props.allProducts.products);

  return (
    <div className="category">
      <div className="category-name">{props.allProducts.name}</div>
      <div className="category-list">
        {allProductArray.map((allprod, index) => (
          <AllProductList key={index} details={allprod} />
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
