import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="flex justify-center items-center py-4 lg:py-10">
      <div className="lg:flex gap-8 text-secondary px-4 lg:px-0 max-w-5xl mx-auto">
        <Image
          width={1920}
          height={1760}
          className="lg:w-1/2 w-full h-72 lg:h-[80svh]"
          src={"/assets/images/our-service-cover.jpg"}
          alt="our-services-cover-bizaug"
        />
        <div className="lg:w-1/2 ">
          <h1 className="text-4xl font-bold py-4">Our Services</h1>
          <p className="pt-4">
            Our services are designed to drive business growth through
            innovative digital solutions, from seamless digital transformation
            to custom web and mobile app development. We specialize in
            optimizing workflows, enhancing user experiences, and boosting
            online visibility with tailored strategies.
          </p>
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 gap-8 flex flex-col my-4">
            <ServiceCard title="Branding" imageUrl="branding-service" />
            <ServiceCard
              title="Web Development"
              imageUrl="web-development-service"
            />
            <ServiceCard title="UX UI" imageUrl="ux-ui-service" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
