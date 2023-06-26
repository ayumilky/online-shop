import Loading from "../loading/loading.component";
import "./button.styles.scss";

/*
default 
inverted
google sign in

*/

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  shop: "shop",
  nav: "nav",
  payment: "payment",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

export default Button;
