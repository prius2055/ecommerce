import TechProductList from "../components/Products/TechProductList";
import "./Category.css";

const techCategory = (props) => {
  const techProductArray = Object.values(props.techProducts.products);

  return (
    <div className="category">
      <div className="category-name">{props.techProducts.name}</div>
      <div className="category-list">
        {techProductArray.map((prod, index) => (
          <TechProductList key={index} details={prod} />
        ))}
      </div>
    </div>
  );
};

export default techCategory;
