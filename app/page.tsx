"use client";

import OurServicesSection from "@/components/OurServicesSection";
import OurTestimonialsSection from "@/components/OurTestimonialsSection";
import { Button } from "@/components/ui/button";
import WhyChooseSection from "@/components/WhyChooseSection";
import { Facebook, Instagram, MenuIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className=" bg-neutral-900">
      <div className="h-[48svh]">
        <ThreeScene />
      </div>
      <div className="pt-8 px-8 max-w-5xl mx-auto text-white  ">
        <h2 className="font-doto font-bold text-4xl">
          Tailored Solutions, Amplified{" "}
          <span className="text-yellow-500">Success</span>
        </h2>
        <p className="text-neutral-300">
          Custom software development to augment your business operations
        </p>
        <WhyChooseSection />
        <OurServicesSection />
        <OurTestimonialsSection />
        <div className="text-center pb-8">
          <h4 className="text-2xl font-semibold">
            Ready to Transform Your Digital Presence?
          </h4>
          <p>
            Take the first step towards digital success with BizAug by your
            side.
          </p>
          <p className="mt-8">Unlock Your Digital Potential Today</p>
          <Button className="w-full bg-white text-black font-bold">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
