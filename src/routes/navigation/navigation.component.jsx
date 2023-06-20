import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import NavLogo from "../../assets/NavLogo.png";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={NavLogo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <i class="fa-solid fa-shop"></i> <span>Shop</span>
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              <i class="fa-solid fa-user"></i> <span>Sign Out</span>
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              <i class="fa-regular fa-user"></i> <span>Sign In</span>
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
