"use client";
import React, { useState } from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
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
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <header className="h-[8svh] z-20 text-2xl bg-secondary lg:bg-background font-bold w-full px-4  text-primary select-none">
      {/* Mobile Header */}
      <div className="flex h-full items-center justify-between lg:hidden">
        <div onClick={onClickLogo}>BizAug</div>
        <button onClick={() => setOpen(true)}>
          <MenuIcon />
        </button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            side={"right"}
            className="p-4 py-16 bg-background border-primary"
          >
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
      </div>

      {/* Desktop Header */}
      <div className="justify-center items-center h-full flex select-none">
        <div className="hidden lg:flex w-full items-center justify-between max-w-5xl ">
          <div
            onClick={onClickLogo}
            className="flex items-center gap-4 cursor-pointer"
          >
            <Image
              src={"/assets/images/bizaug-logo.png"}
              width={48}
              height={48}
              alt="bizaug-logo"
            />
            <div className="text-3xl text-secondary font-bold">BizAug</div>
          </div>
          <nav className="flex space-x-8 text-lg">
            {ROUTES.map((route) => (
              <a
                key={route.path}
                href={route.path}
                className={`${
                  activeRoute === route.path
                    ? "font-bold"
                    : "text-secondary font-normal"
                } hover:text-yellow-500 text-secondary `}
              >
                {route.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
