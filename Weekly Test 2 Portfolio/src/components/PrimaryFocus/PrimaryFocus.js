import React from "react";

const PrimaryFocus = ({
  serviceImage,
  serviceTitle,
  serviceText,
  serviceAlt,
}) => {
  return (
    <>
      <li className="service-item">
        <div className="service-icon-box">
          <img src={serviceImage} alt={serviceAlt} width="40" />
        </div>

        <div className="service-content-box">
          <h4 className="h4 service-item-title">{serviceTitle}</h4>

          <p className="service-item-text">{serviceText}</p>
        </div>
      </li>
    </>
  );
};

export default PrimaryFocus;
