import React from "react";
import ServiceHomeCard from "./ServiceHomeCard";

const OurServicesSection = () => {
  return (
    <div className="text-center flex flex-col gap-4 py-8">
      <h2 className="text-4xl font-bold ">Our Services</h2>
      <p className=" mb-4">
        From start to finish, we offer a comprehensive suite of services that
        cover all aspects of your digital transformation journey:
      </p>
      <div className="grid lg:grid-cols-2 lg:gap-12 gap-4">
        <ServiceHomeCard
          title="Strategic Digital Consulting"
          content="Analyze and optimize business workflows"
          imageUrl="consulting"
        />
        <ServiceHomeCard
          title="UI/UX Design"
          content="Creating intuitive and visually appealing digital experiences."
          imageUrl="ux-ui"
        />
        <ServiceHomeCard
          title="Mobile App Development"
          content="Developing mobile apps for greater accessibility and functionality."
          imageUrl="mobile-app-dev"
        />
        <ServiceHomeCard
          title="Web Development"
          content="Tailored solutions to meet specific business needs."
          imageUrl="website-dev"
        />
      </div>
    </div>
  );
};

export default OurServicesSection;
