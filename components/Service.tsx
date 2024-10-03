"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ReactSVG } from "react-svg";

interface ServiceProps {
  serviceTag: string;
  serviceTitle: string;
  serviceDescription: string;
  serviceDescriptionList: ReactNode;
  serviceLinkUrl: string;
  serviceImageUrl: string;
  rowReverse: boolean;
  primaryColor: string;
  secondaryColor: string;
}
const Service = ({
  serviceTag,
  serviceTitle,
  serviceDescription,
  serviceDescriptionList,
  serviceLinkUrl,
  serviceImageUrl,
  rowReverse,
  secondaryColor,
  primaryColor,
}: ServiceProps) => {
  return (
    <div
      className={clsx("flex items-center md:gap-20 justify-between", {
        "md:flex-row-reverse": rowReverse,
      })}
    >
      <div className="flex flex-col gap-3 lg:gap-6">
        <p className={"font-medium lg:text-lg"} style={{ color: primaryColor }}>
          {serviceTag}
        </p>
        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-2xl lg:text-4xl max-w-[472px] text-[#172026]">
            {serviceTitle}
          </h2>
          <Image
            src={serviceImageUrl}
            alt={serviceTag + " image"}
            width={350}
            height={350}
            className="md:hidden"
          />
          <p className="text-[#36485C] lg:text-lg max-w-[472px]">
            {serviceDescription}
          </p>
          {serviceDescriptionList}
          <Link
            href={serviceLinkUrl}
            className={"flex items-center gap-3 py-2 lg:py-6 w-fit"}
            style={{ color: primaryColor }}
          >
            Learn More
            <div
              className="rounded-full w-fit p-2"
              style={{ backgroundColor: secondaryColor, color: primaryColor }}
            >
              <ReactSVG src={"/Hero/Arrow-Right.svg"} width={16} height={16} />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={serviceImageUrl}
          alt={serviceTag + " image"}
          width={628}
          height={628}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Service;
