import { MenuIcon } from "lucide-react";
import React from "react";

const Header = () => (
  <header className="h-[8svh] text-2xl font-bold lg:hidden w-full justify-between flex px-4 py-6 bg-white">
    BizAug
    <MenuIcon />
  </header>
);

export default Header;
