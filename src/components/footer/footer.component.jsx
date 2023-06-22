import { Link } from "react-router-dom";
import "./footer.styles.scss";
import Logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <div className="foot-section">
      <div className="wrapper">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="footer-list">
            <ul>
              <li>About Us</li>
              <Link to="/contactus">
                <li>Contact Us</li>
              </Link>
              <li className="social-media-icon">
                <i className="fa-brands fa-square-facebook"></i>{" "}
              </li>
              <li className="social-media-icon">
                <i className="fa-brands fa-square-twitter"></i>{" "}
              </li>
              <li className="social-media-icon">
                {" "}
                <i className="fa-brands fa-square-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
