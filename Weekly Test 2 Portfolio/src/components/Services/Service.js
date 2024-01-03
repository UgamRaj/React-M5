import React from "react";
import PrimaryFocus from "../PrimaryFocus/PrimaryFocus";

const Service = () => {
  return (
    <>
      <PrimaryFocus
        serviceImage={"https://oktayshakirov.com/assets/images/icon-dev.svg"}
        serviceTitle="Web Design & Development"
        serviceText="Creating attractive, easy-to-use websites that work well for businesses and individuals online"
        serviceAlt={"Web development icon"}
      />
      <PrimaryFocus
        serviceImage={"https://oktayshakirov.com/assets/images/icon-app.svg"}
        serviceTitle="Mobile Apps & Games"
        serviceText="Creating and developing engaging mobile apps and games for iOS
                  and Android devices."
        serviceAlt={"mobile app icon"}
      />
      <PrimaryFocus
        serviceImage={
          "https://oktayshakirov.com/assets/images/icon-frameworks.svg"
        }
        serviceTitle="Development Solutions"
        serviceText="Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."
        serviceAlt={"frameworks icon"}
      />
      <PrimaryFocus
        serviceImage={
          "https://oktayshakirov.com/assets/images/icon-marketing.svg"
        }
        serviceTitle="Marketing & SEO"
        serviceText="Using SEO and marketing strategies to boost online visibility and promote products or services."
        serviceAlt={"frameworks icon"}
      />
    </>
  );
};

export default Service;
