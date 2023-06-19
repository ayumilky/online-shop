import "./trending.styles.scss";
import ProductCard from "../product-card/product-card.component";
import Button from "../button/button.component";
const Trending = ({ products, title }) => {
  const slideLeft = () => {
    let slider = document.getElementById("trending-slide");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    let slider = document.getElementById("trending-slide");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className="wrapper">
      <div className="shop-wrap">
        <div className="trending-container">
          <div className="top-container">
            <h1>Hot Picks</h1>
            <div className="silder-btns">
              <Button buttonType="nav" type="button" onClick={slideLeft}>
                <i className="fa-solid fa-arrow-left"></i>
              </Button>
              <Button buttonType="nav" type="button" onClick={slideRight}>
                <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </div>
          </div>
          <div className="trending-products-container" id="trending-slide">
            {products
              .filter((_, idx) => idx > 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
