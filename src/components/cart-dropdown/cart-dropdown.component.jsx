import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import "./cart-dropdown.styles.scss";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          goToCheckoutHandler();
          toggleIsCartOpen();
        }}
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
