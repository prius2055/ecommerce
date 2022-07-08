import "./ProductList.css";

const ClothesProducts = (props) => {
  return (
    <div className="product">
      <img
        src={props.details.gallery[0]}
        alt={props.details.name}
        className="product-image"
      />
      <p className="product-description">{props.details.name}</p>
      <p className="product-price">
        <span>{props.details.prices[0].currency.symbol}</span>
        <span>{props.details.prices[0].amount}</span>
      </p>
    </div>
  );
};

export default ClothesProducts;
