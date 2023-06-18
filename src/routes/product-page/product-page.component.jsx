import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import "./product-page.styles.scss";
import FaqDropdown from "../../components/faq-dropdown/faq-dropdown.component";
const ProductPage = () => {
  const { category, id } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const products = categoriesMap[category];
  const product = products && products.find((p) => p.id === Number(id));

  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(imageUrl);

  useEffect(() => {
    if (product) {
      setImageUrl(product.imageUrl);
    }
  }, [product]);

  if (!product) {
    return <div>Loading</div>;
  }

  const {
    including,
    material,
    otherImage,
    price,
    size,
    tag,
    care,
    longdesc,
    name,
  } = product;

  const detailsInfo = [
    {
      question: "Materials and Care",
      answer: `Made of ${material}. ${care[0]}, ${care[1]} `,
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

  const changeImageHandler = (event) => {
    console.log(event.target.src);
    return setImage(event.target.src);
  };

  const changeBackMainImageHandler = (event) => {
    console.log(event.target.src);
    return setImage(imageUrl);
  };

  return (
    <div className="wrapper">
      <div className="shop-wrap">
        <div className="product-page-container">
          <div className="product-left">
            <div className="main-img-container">
              <img src={image ? image : imageUrl} alt="main-product" />
            </div>
            <div className="other-img-container">
              <img
                src={imageUrl}
                alt="main-product"
                onMouseOver={changeImageHandler}
                onMouseLeave={changeBackMainImageHandler}
              />
              <img
                src={otherImage[0]}
                alt="product"
                onMouseOver={changeImageHandler}
                onMouseLeave={changeBackMainImageHandler}
              />
              {otherImage[1] && (
                <img
                  src={otherImage[1]}
                  alt="product"
                  onMouseOver={changeImageHandler}
                  onMouseLeave={changeBackMainImageHandler}
                />
              )}
            </div>
          </div>
          <div className="product-right">
            <div className="product-title-bar">
              <h1>{name}</h1>
              <h5>
                {tag[0]} , {tag[1]}
              </h5>
            </div>
            <div className="desc">
              <p>{longdesc}</p>
            </div>
            <div className="price-tag">
              <span>${price}.00</span>
            </div>
            <div className="buttons">{/* for buttons */}</div>
            <div className="details-section">
              {detailsInfo.map((detailInfo, i) => (
                <FaqDropdown faq={detailInfo} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
