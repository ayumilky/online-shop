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
              <li>Store Locator</li>
              <li>Contact Us</li>
              <li>Social Media</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
