import React from "react";

const ContactInfoCard = (props) => {
  return (
    <div>
      <div className="flex items-center gap-[24px]">
        <div className="text-[28px]">{props.icon}</div>
        <div>
          <h4 className="text-[20px] font-bold">{props.heading}</h4>
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
