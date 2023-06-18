import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import "./product-card.styles.scss";

const ProductCard = ({ product, title }) => {
  const { name, price, imageUrl, otherImage } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <Link to={`/shop/${title}/${product.id}`}>
        <img className="img-hover" src={otherImage[0]} alt={`${name}`} />
      </Link>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
