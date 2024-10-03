import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FooterList = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <>
      <div className="hidden md:flex flex-col gap-8 text-[#36485C]">
        <p className="font-medium">{title}</p>
        <div className="flex flex-col gap-8">
          {items.map((item, index) => {
            return (
              <Link key={index} href={""}>
                {item}
              </Link>
            );
          })}
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full md:hidden">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="footer text-[#36485C] font-medium">
            {title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col text-[#36485C] gap-4">
              {items.map((item, index) => {
                return (
                  <Link key={index} href={""}>
                    {item}
                  </Link>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col px-5 py-14 md:px-14 lg:px-20 gap-14">
      <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-44 lg:gap-56">
        <div className="flex items-start gap-3">
          <Image
            src={"/nav-icons/Union.svg"}
            alt="logo-image"
            width={35}
            height={35}
          />
          <p className="text-lg font-bold">YOUR SITE</p>
        </div>

        <div className="flex flex-col md:flex-row flex-grow justify-between md:gap-4">
          <FooterList title="Features" items={["Growth", "Sales", "Chat"]} />
          <FooterList title="Pricing" items={["Growth", "Sales", "Chat"]} />
          <FooterList title="Enterprise" items={["Growth", "Sales", "Chat"]} />
          <FooterList
            title="Careers"
            items={["Open Positions", "Part-Time", "Contractual", "Contact Us"]}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
        <p className="font-medium text-sm md:text-base text-[#5F7896]">
          © Copyright 2024. Your Site. All rights reserved.
        </p>

        <div className="flex items-center gap-14">
          <Link href={""}>
            <Image
              src={"/socials/twiter.svg"}
              alt="twitter-icon"
              width={20}
              height={20}
            />
          </Link>
          <Link href={""}>
            {" "}
            <Image
              src={"/socials/facebook.svg"}
              alt="twitter-icon"
              width={20}
              height={20}
            />
          </Link>
          <Link href={""}>
            <Image
              src={"/socials/wifi.svg"}
              alt="twitter-icon"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
