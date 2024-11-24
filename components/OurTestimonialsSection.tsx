import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import TestimonialHomeCard from "./TestimonialHomeCard";

const OurTestimonialsSection = () => {
  return (
    <div className="text-center flex flex-col gap-4 py-8">
      <h2 className="text-4xl font-bold ">Our Testimonials</h2>
      <p className="max-w-2xl mx-auto mb-4">
        Don&apos;t just take our word for it; hear what our satisfied clients
        have to say about their experience with BizAug. We take pride in
        building lasting relationships and delivering exceptional results.
      </p>
      <div className="max-w-3xl mx-auto w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          <SwiperSlide>
            <TestimonialHomeCard
              name="Bibin George"
              businessName="DBS Tyres"
              content="Working with BizAug was a pleasure. Their web design team created a
                stunning website that perfectly captured our brand's essence. The
                feedback from our customers has been overwhelmingly positive."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialHomeCard
              name="Priya Sharma"
              businessName="GreenField Organics"
              content="BizAug transformed our online presence with their outstanding design and SEO strategies. We've seen a significant increase in traffic and engagement since working with them."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurTestimonialsSection;
