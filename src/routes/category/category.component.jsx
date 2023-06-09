import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryMenu from "../../components/category-menu/category-menu.component";
import PaginationBar from "../../components/pagination/pagination.component";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="wrapper">
      <div className="shop-wrap">
        <CategoryMenu />
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                title={category.toLowerCase()}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Category;
