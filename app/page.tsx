"use client";

import OurServicesSection from "@/components/OurServicesSection";
import OurTestimonialsSection from "@/components/OurTestimonialsSection";
import { Button } from "@/components/ui/button";
import WhyChooseSection from "@/components/WhyChooseSection";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className=" bg-neutral-900">
      <div className="lg:flex lg:items-center">
        <div className="h-[48svh] lg:w-1/2 lg:h-[100svh]">
          <ThreeScene />
        </div>
        <div className="pt-8 px-8 lg:w-1/2 mx-auto text-white lg:h-[100svh] lg:justify-center lg:flex lg:flex-col ">
          <h2 className="font-doto font-bold text-4xl lg:text-8xl mt-auto ">
            Tailored Solutions, Amplified{" "}
            <span className="text-yellow-500">Success</span>
          </h2>
          <div className="flex flex-col mt-auto">
            <p className="text-neutral-300">
              Custom software development to augment your business operations
            </p>
            <Button className="text-neutral-900 bg-white p-4 my-10 w-2/4">
              Explore Our Service
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-8 px-8 max-w-5xl mx-auto text-white  ">
        <WhyChooseSection />
        <OurServicesSection />
        <OurTestimonialsSection />
        <div className="text-center pb-16">
          <h4 className="text-2xl font-semibold">
            Ready to Transform Your Digital Presence?
          </h4>
          <p>
            Take the first step towards digital success with BizAug by your
            side.
          </p>
          <p className="mt-8 mb-4">Unlock Your Digital Potential Today</p>
          <Button className="w-full bg-white text-black font-bold ">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
