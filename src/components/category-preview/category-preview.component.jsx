import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreivew = ({ title, products }) => {
  return (
    <div className="wrapper">
      <div className="category-preview-container">
        <h2>
          <Link to={title} className="title">
            {title.toUpperCase()}
          </Link>
        </h2>
        <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} title={title} />
            ))}
        </div>
        {/* <hr className="container-seperator" /> */}
      </div>
    </div>
  );
};

export default CategoryPreivew;
