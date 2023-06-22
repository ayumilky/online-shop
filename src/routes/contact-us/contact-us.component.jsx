import Map from "../../components/map/map.component";
import "./contact-us.styles.scss";
import storePhoto from "../../assets/storePhoto.avif";

const ContactUs = () => {
  const storeLocateInfo = {
    longitude: -79.385139,
    ladtitude: 43.658224,
    storeImg: storePhoto,
    address: {
      street: "115 Strachan Ave",
      city: "Toronto",
      state: "Ontario",
      country: "Canada",
      postalCode: "M5G 1Z6",
      phoneNumber: "416-504-8901",
    },
  };
  const { address, storeImg } = storeLocateInfo;
  const { street, city, state, country, postalCode, phoneNumber } = address;
  return (
    <div className="wrapper">
      <div className="shop-wrap">
        <h1>Contact Us</h1>
        <div className="store-location-container">
          <div className="map-left">
            <Map storeLocateInfo={storeLocateInfo} />
          </div>
          <div className="add-right">
            <div className="add-card">
              <div className="add-top">
                <img src={storeImg} alt="storefront" />
              </div>
              <div className="add-down">
                <h2>la Masion de LUNA</h2>
                <p>
                  {street}, {city}, {state},
                  <br />
                  {country} {postalCode}
                  <br />
                  Phone: {phoneNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
