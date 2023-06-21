import { Link } from "react-router-dom";
import Button from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import "./product-card.styles.scss";

const ProductCard = ({ product, title }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl, otherImage } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <Link
        to={`/shop/${title}/${product.id}`}
        onClick={() => window.scrollTo(0, 280)}
      >
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
