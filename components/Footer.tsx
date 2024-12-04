import { Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-secondary flex items-center justify-center p-4 border-t-2 border-secondary py-8">
      <div className="container lg:px-8 max-w-5xl mx-auto  flex flex-col gap-4 text-center text-sm font-light">
        <div className="flex justify-between items-center pb-4">
          <h5 className="font-bold text-2xl">BizAug</h5>
          <div>
            Follow Us On Socials
            <div className="flex gap-4">
              <Instagram />
              <Facebook />
            </div>
          </div>
        </div>
        @2024 BizAug. All Rights Reserved
        <div className="flex justify-between ">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
