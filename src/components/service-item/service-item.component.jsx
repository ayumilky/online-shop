import "./service-item.styles.scss";

const ServiceItem = ({ serviceInfo }) => {
  const { icon, infoTitle, infoDesc } = serviceInfo;
  return (
    <div className="ul-display">
      <div className="li-display">
        <div className="item-list">
          <div className="item-icon">{icon}</div>
          <div className="item-right">
            <div className="item-title">{infoTitle}</div>
            <div className="item-info">{infoDesc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
