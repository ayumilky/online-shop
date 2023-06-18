import { Link } from "react-router-dom";

import "./banner.styles.scss";
import Bannerphoto from "../../assets/img/Bannerphoto.jpeg";
import Button from "../button/button.component";
const Banner = () => {
  return (
    <div className="wrapper">
      <div className="banner-container">
        <div className="flex-items-left">
          <img className="left-image" src={Bannerphoto} alt="banner" />
        </div>
        <div className="flex-items-right">
          <div className="banner-info-right">
            <p className="banner-passage">
              Discover our exquisite collection, perfectly crafted to elevate
              your lifestyle. From sleek designs to unparalleled quality, our
              products seamlessly blend with your unique style, creating a
              harmonious haven that reflects your impeccable taste.
            </p>
          </div>
          <br />
          <Link to="/shop">
            <Button buttonType="shop">EXPLORE</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
