import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span className="full-form">Description</span>
          <span className="short-form">Desc</span>
        </div>
        <div className="header-block">
          <span className="full-form">Quantity</span>
          <span className="short-form">Qty</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span className="full-form">Sub Total</span>
          <span className="short-form">Sub.</span>
        </div>
        <div className="header-block">
          <span className="full-form">Remove</span>
          <span className="short-form">&#10005;</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
