"use client";

import OurServicesSection from "@/components/OurServicesSection";
import OurTestimonialsSection from "@/components/OurTestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className=" w-svw bg-neutral-900">
      <header className="h-[8svh] w-full justify-between flex px-8 py-6 bg-white">
        BizAug
        <div>Menu</div>
      </header>
      <div className="h-[48svh] w-svw">
        <ThreeScene />
      </div>
      <div className="pt-8 px-8 max-w-6xl mx-auto text-white gap-4 flex flex-col">
        <h2 className=" font-bold text-4xl">
          Tailored Solutions, Amplified Success
        </h2>
        <p className="text-neutral-500">
          Custom software development to augment your business operations
        </p>
        <WhyChooseSection />
        <OurServicesSection />
        <OurTestimonialsSection />
      </div>
    </div>
  );
}
