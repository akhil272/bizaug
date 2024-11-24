import React from "react";
import ServiceHomeCard from "./ServiceHomeCard";

const OurServicesSection = () => {
  return (
    <div className="text-center ">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <p>
        From start to finish, we offer a comprehensive suite of services that
        cover all aspects of your digital transformation journey:
      </p>
      <div className="grid lg:grid-cols-2 lg:gap-4">
        <ServiceHomeCard
          title="Strategic Digital Consulting"
          content="Analyze and optimize business workflows"
        />
        <ServiceHomeCard
          title="UI/UX Design"
          content="Creating intuitive and visually appealing digital experiences."
        />
        <ServiceHomeCard
          title="Mobile App Development"
          content="Developing mobile apps for greater accessibility and functionality."
        />
        <ServiceHomeCard
          title="Web Development"
          content="Tailored solutions to meet specific business needs."
        />
      </div>
    </div>
  );
};

export default OurServicesSection;
