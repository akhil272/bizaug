"use client";
import React, { useState } from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type RouteConfig = {
  title: string;
  path: string;
  dynamicTitles?: { [key: string]: string };
};

const ROUTES: RouteConfig[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Our Services",
    path: "/our-services",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];
const NavigationLineItem = ({
  routeTitle,
  route,
  activeRoute,
}: {
  routeTitle: string;
  route: string;
  activeRoute: string;
}) => {
  return (
    <Link
      className={`flex gap-4 items-center ${activeRoute === route ? "" : ""}`}
      href={route}
    >
      {/* <Icon /> */}
      <text className="text-2xl font-medium">{routeTitle}</text>
    </Link>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const activeRoute = usePathname();
  return (
    <header className="h-[8svh] text-2xl bg-secondary font-bold lg:hidden w-full justify-between flex px-4 py-6 text-primary ">
      BizAug
      <button onClick={() => setOpen(true)}>
        <MenuIcon />
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={"right"} className="p-4 py-16 bg-background">
          <div className="justify-between flex flex-col h-[92svh] text-secondary">
            <div>
              <div className="text-4xl font-bold pb-16">BizAug</div>
              <div
                onClick={() => setOpen(false)}
                className="flex flex-col gap-16 my-8"
              >
                {ROUTES.map((route) => (
                  <NavigationLineItem
                    key={route.path}
                    routeTitle={route.title}
                    route={route.path}
                    activeRoute={activeRoute}
                  />
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
