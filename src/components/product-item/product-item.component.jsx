import { useState, useEffect } from "react";
import FaqDropdown from "../faq-dropdown/faq-dropdown.component";
import Button from "../button/button.component";
import "./product-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const ProductItem = ({ product, detailsInfo }) => {
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  const { otherImage, price, tag, longdesc, name } = product;

  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(imageUrl);

  useEffect(() => {
    if (product) {
      setImageUrl(product.imageUrl);
    }
  }, [product]);

  const changeImageHandler = (event) => {
    return setImage(event.target.src);
  };

  const changeBackMainImageHandler = (event) => {
    return setImage(imageUrl);
  };

  return (
    <>
      <div className="product-left">
        <div className="main-img-container">
          <img src={image ? image : imageUrl} alt="main-product" />
        </div>
        <div className="other-img-container">
          <img
            src={imageUrl}
            alt="main-product"
            onMouseOver={changeImageHandler}
            onMouseLeave={changeBackMainImageHandler}
          />
          <img
            src={otherImage[0]}
            alt="product"
            onMouseOver={changeImageHandler}
            onMouseLeave={changeBackMainImageHandler}
          />
          {otherImage[1] && (
            <img
              src={otherImage[1]}
              alt="product"
              onMouseOver={changeImageHandler}
              onMouseLeave={changeBackMainImageHandler}
            />
          )}
        </div>
      </div>
      <div className="product-right">
        <div className="product-title-bar">
          <h1>{name}</h1>
          <h5>
            {tag[0]} , {tag[1]}
          </h5>
        </div>
        <div className="desc">
          <p>{longdesc}</p>
        </div>
        <div className="price-tag-section">
          <div className="price-tag">
            <span>${price}.00</span>
          </div>
          <div className="buttons">
            <Button onClick={addProductToCart}>
              <span className="shop-icon">
                <i class="fa-solid fa-cart-plus"></i>
              </span>
            </Button>
          </div>
        </div>
        <hr />
        <div className="details-section">
          {detailsInfo.map((detailInfo, i) => (
            <FaqDropdown faq={detailInfo} index={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductItem;
