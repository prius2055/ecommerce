import { useParams } from "react-router-dom";

import "./ProductDetail.css";

const AllProductDetail = (props) => {
  const { productid } = useParams();
  console.log(productid);
  const allProductsArray = Object.values(props.allProducts.products);

  console.log(allProductsArray);

  return (
    <div className="detail-container">
      {allProductsArray
        .filter((prod) => prod.name === productid)
        .map((prod, index) => (
          <div className="product-detail" key={index}>
            <div className="product-detail_smallimage">
              {prod.gallery.map((gallery) => (
                <div className="product-detail_smallimage">
                  <img src={gallery} alt={prod.name} />
                </div>
              ))}
            </div>
            <div className="product-detail_largeimage">
              <img src={prod.gallery[0]} alt={prod.name} />
            </div>

            <div className="product-detail_info">
              <p className="product-description">{prod.brand}</p>
              <p className="product-description">{prod.name}</p>

              <div>
                <p className="product-description">{prod.attributes[0].name}</p>
                <p className="product-description">
                  {prod.attributes[0].items[0].value}
                </p>
                <p className="product-description">
                  {prod.attributes[0].items[1].value}
                </p>
                <p className="product-description">
                  {prod.attributes[0].items[2].value}
                </p>
                <p className="product-description">
                  {prod.attributes[0].items[3].value}
                </p>
              </div>

              <p className="product-price">
                <span>{prod.prices[0].currency.symbol}</span>
                <span>{prod.prices[0].amount}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllProductDetail;
