import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import "./product-page.styles.scss";
import CategoryMenu from "../../components/category-menu/category-menu.component";
import Loading from "../../components/loading/loading.component";
import ProductItem from "../../components/product-item/product-item.component";
import Trending from "../../components/trending/trending.component";
const ProductPage = () => {
  const { category, id } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const products = categoriesMap[category];
  const product = products && products.find((p) => p.id === Number(id));

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (product) {
      setImageUrl(product.imageUrl);
    }
  }, [product]);

  if (!product) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const { including, material, size, care } = product;

  const caring = care[1] ? `, ${care[1]}` : "";

  const detailsInfo = [
    {
      question: "Materials and Care",
      answer: `Made of ${material}. ${care[0]}${caring}. `,
    },
    {
      question: "Size",
      answer: `${size}`,
    },
    {
      question: "Package Includes",
      answer: `${including}`,
    },
  ];

  return (
    <div className="wrapper">
      <div className="shop-wrap">
        <CategoryMenu />
        <div className="product-page-container">
          <ProductItem product={product} detailsInfo={detailsInfo} />
        </div>
      </div>
      <Trending products={products} title={category} />
      <Outlet />
    </div>
  );
};

export default ProductPage;
