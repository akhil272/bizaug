import React from "react";
import ChooseHomeCard from "./ChooseHomeCard";

const WhyChooseSection = () => {
  return (
    <>
      <h5 className=" text-3xl font-bold text-center">Why Choose Us</h5>
      <p>
        At BizAug, we don&apos;t just offer solutions—we become a trusted
        partner in your business journey. Here&apos;s why you should choose us:
      </p>
      <ChooseHomeCard
        title="We Listen, We Understand"
        content="Your entrepreneurial journey is unique, and we recognize that.
            Before suggesting any strategy, we take the time to listen
            carefully, ensuring we fully understand your goals, challenges, and
            vision. We're not just consultants—we're collaborators who
            value your insights and ambitions."
      />
      <ChooseHomeCard
        title="Strategic SWOT Analysis"
        content="We conduct an in-depth SWOT (Strengths, Weaknesses, Opportunities,
            Threats) analysis to ensure that every decision we make is
            data-driven and aligned with your business's specific needs.
            This helps us identify not only areas for improvement but also
            untapped opportunities that can drive growth and competitive
            advantage."
      />
      <ChooseHomeCard
        title="Seamless Technology Integration"
        content="We conduct an in-depth SWOT (Strengths, Weaknesses, Opportunities,
        Threats) analysis to ensure that every decision we make is data-driven
        and aligned with your business's specific needs. This helps us identify
        not only areas for improvement but also untapped opportunities that can
        drive growth and competitive advantage."
      />
    </>
  );
};

export default WhyChooseSection;
