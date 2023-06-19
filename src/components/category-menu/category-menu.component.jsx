import { useNavigate, Link } from "react-router-dom";
import "./category-menu.styles.scss";
import PaginationBar from "../pagination/pagination.component";

const CategoryMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="category-menu-container">
      <div className="home-nav-container" onClick={() => navigate(-1)}>
        Back
      </div>
      <div className="cat-nav-container">
        <ul className="cat-nav-links">
          <Link to="/shop/bakeware">
            <li>Bakeware</li>
          </Link>
          <Link to="/shop/cookware">
            <li>Cookware</li>
          </Link>
          <Link to="/shop/dinnerware">
            <li>Dinnerware</li>
          </Link>
          <Link to="/shop/serveware">
            <li>Serveware</li>
          </Link>
          <Link to="/shop/storage">
            <li>Storage</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
