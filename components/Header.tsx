"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { linkUrl: "", textContent: "Features" },
  { linkUrl: "", textContent: "Pricing" },
  { linkUrl: "", textContent: "Enterprise" },
  { linkUrl: "", textContent: "Careers" },
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "px-5 py-4 md:px-14 md:py-4 lg:px-20 lg:py-6 top-0 z-10",
        isScrolled ? "shadow-sm border-b sticky bg-white" : ""
      )}
    >
      <nav className="flex justify-between">
        <ul className="flex items-center gap-16 md:gap-12">
          <li>
            <Image
              src={"/nav-icons/Union.svg"}
              alt="logo-image"
              width={35}
              height={35}
            />
          </li>
          <li className="hidden gap-14 lg:flex">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.linkUrl}
                  key={index}
                  className="text-[#36485C] hover:text-[#225794] font-medium"
                >
                  {link.textContent}
                </Link>
              );
            })}
          </li>
        </ul>
        <ul className="flex items-center gap-5 lg:gap-14">
          <li className="hidden lg:block">
            <Link href={""}>Open an Account</Link>
          </li>
          <li className="flex items-center gap-3 md:gap-2">
            <Image
              src={"/nav-icons/User.svg"}
              alt="logo-image"
              width={26}
              height={26}
            />
            <p className="hidden md:block">Sign In</p>
          </li>
          <li>
            <Sheet>
              <SheetTrigger className="block lg:hidden">
                <Image
                  src={"/nav-icons/Menu.svg"}
                  alt="logo-image"
                  width={26}
                  height={26}
                />
              </SheetTrigger>
              <SheetContent className="rounded-l-xl">
                <li className="flex flex-col gap-6">
                  {links.map((link, index) => {
                    return (
                      <Link
                        href={link.linkUrl}
                        key={index}
                        className="text-[#36485C] font-medium"
                      >
                        {link.textContent}
                      </Link>
                    );
                  })}
                </li>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
