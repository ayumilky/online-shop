import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./category-menu.styles.scss";

const CategoryMenu = () => {
  const navigate = useNavigate();

  const [isCategoryMenu, setCategoryMenu] = useState(false);

  const toggleCategoryMenu = () => {
    setCategoryMenu(!isCategoryMenu);
  };

  return (
    <div className="category-menu-container">
      <div className="home-nav-container" onClick={() => navigate(-1)}>
        Back
      </div>
      <div className="cat-nav-container">
        <ul
          className={
            isCategoryMenu ? "cat-nav-links responsive" : "cat-nav-links"
          }
        >
          <li className="drop-down" onClick={toggleCategoryMenu}>
            Menu <i className="fa-sharp fa-solid fa-caret-down"></i>
          </li>
          <Link to="/shop/bakeware" onClick={toggleCategoryMenu}>
            <li>Bakeware</li>
          </Link>
          <Link to="/shop/cookware" onClick={toggleCategoryMenu}>
            <li>Cookware</li>
          </Link>
          <Link to="/shop/dinnerware" onClick={toggleCategoryMenu}>
            <li>Dinnerware</li>
          </Link>
          <Link to="/shop/serveware" onClick={toggleCategoryMenu}>
            <li>Serveware</li>
          </Link>
          <Link to="/shop/storage" onClick={toggleCategoryMenu}>
            <li>Storage</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
