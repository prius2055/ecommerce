import ClothProductList from "../components/Products/ClothProductList";
import "./Category.css";

const ClothCategory = (props) => {
  const clothProductArray = Object.values(props.clothProducts.products);

  return (
    <div className="category">
      <div className="category-name">{props.clothProducts.name}</div>
      <div className="category-list">
        {clothProductArray.map((prod, index) => (
          <ClothProductList key={index} details={prod} />
        ))}
      </div>
    </div>
  );
};

export default ClothCategory;
