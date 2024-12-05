import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center py-4 lg:py-10">
      <div className="lg:flex gap-8 text-secondary px-4 lg:px-0 max-w-5xl mx-auto">
        <Image
          width={477}
          height={716}
          className="lg:w-1/2 w-full h-72 lg:h-[80svh] object-cover object-top"
          src={"/assets/images/about-us-cover.jpg"}
          alt={"about-us-cover-bizaug"}
        />
        <div className="lg:w-1/2 ">
          <h1 className="text-4xl font-bold py-4">About Us</h1>
          <p className="pt-4">
            We are a digital transformation consulting firm that helps
            businesses across various industries streamline their operations and
            enhance their digital presence. We specialize in analyzing existing
            workflows, proposing out-of-the-box ideas, and implementing custom
            solutions that drive efficiency and growth. Our services include web
            application development, UI/UX design, mobile app development,
            digital marketing, and workflow digitalization.
          </p>
          <div className="flex flex-col gap-4 py-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold text-center">Mission</h4>
              <p>
                &quot;Empowering businesses through innovative digital solutions
                and consulting services, transforming traditional workflows into
                efficient, modern processes that enhance productivity and
                growth.&quot;
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold text-center">Vision</h4>
              <p>
                &quot;To be a leading provider of bespoke digital transformation
                consulting services, recognized for our commitment to quality,
                innovation, and client success.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
