import React from "react";
import ChooseHomeCard from "./ChooseHomeCard";

const WhyChooseSection = () => {
  return (
    <div className="text-center flex flex-col gap-4 py-8">
      <h2 className="text-4xl font-bold ">Why Choose Us</h2>
      <p className=" mb-4">
        At BizAug, we don&apos;t just offer solutions—we become a trusted
        partner in your business journey. Here&apos;s why you should choose us:
      </p>
      <div className="grid lg:grid-cols-2 gap-4">
        <ChooseHomeCard
          title="We Listen, We Understand"
          content="Your entrepreneurial journey is unique, and we recognize that.
            Before suggesting any strategy, we take the time to listen
            carefully, ensuring we fully understand your goals, challenges, and
            vision. We're not just consultants—we're collaborators who
            value your insights and ambitions."
          imageUrl="we-listen"
        />
        <ChooseHomeCard
          title="Strategic SWOT Analysis"
          content="We conduct an in-depth SWOT (Strengths, Weaknesses, Opportunities,
            Threats) analysis to ensure that every decision we make is
            data-driven and aligned with your business's specific needs.
            This helps us identify not only areas for improvement but also
            untapped opportunities that can drive growth and competitive
            advantage."
          imageUrl="swot"
        />
        <ChooseHomeCard
          title="Seamless Technology Integration"
          content="At BizAug, we specialize in seamless technology
        integration, ensuring that new systems align perfectly with your
        existing infrastructure. Our expert approach minimizes disruptions,
        accelerates adoption, and empowers your team to harness the full
        potential of advanced technologies with confidence and ease."
          imageUrl="seamless"
        />
      </div>
    </div>
  );
};

export default WhyChooseSection;
