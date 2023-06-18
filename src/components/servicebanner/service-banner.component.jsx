import ServiceItem from "../service-item/service-item.component";
import "./service-banner.styles.scss";
const serviceInfo = [
  {
    id: 1,
    icon: <i className="fa-solid fa-plane"></i>,
    infoTitle: "Free Delivery",
    infoDesc: "From orders over $50",
  },
  {
    id: 2,
    icon: <i className="fa-solid fa-shield"></i>,
    infoTitle: "Secure Payment",
    infoDesc: "100% Protect",
  },
  {
    id: 3,
    icon: <i className="fa-sharp fa-solid fa-money-check-dollar"></i>,
    infoTitle: "Return & Refund",
    infoDesc: "Free Return in 30 Days",
  },
  {
    id: 4,
    icon: <i className="fa-solid fa-box-open"></i>,
    infoTitle: "Dedicated Packaging",
    infoDesc: "Handle with Care",
  },
  {
    id: 5,
    icon: <i className="fa-solid fa-bell-concierge"></i>,
    infoTitle: "Support 24/7",
    infoDesc: "Active Customer Service",
  },
];

const ServiceBanner = () => {
  return (
    <div className="wrapper">
      <div className="service-banner-container">
        {serviceInfo.map((serviceInfo) => (
          <ServiceItem key={serviceInfo.id} serviceInfo={serviceInfo} />
        ))}
      </div>
    </div>
  );
};

export default ServiceBanner;
