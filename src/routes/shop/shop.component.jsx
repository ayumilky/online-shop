import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.action";
import CategoriesPreview from "../categories-preview/categories-preivew.component";
import Category from "../category/category.component";
import ProductPage from "../product-page/product-page.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";
import "./shop.styles.scss";
const Shop = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      <Route
        path=":category/:id"
        element={<ProductPage categories={categories} />}
      />
    </Routes>
  );
};

export default Shop;
