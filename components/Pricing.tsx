"use client";
import React, { ReactNode } from "react";
import { ReactSVG } from "react-svg";

interface PriceProps {
  pricePlan: string;
  pricePlanDescription: string;
  priceServices: ReactNode;
  priceLinkText: string;
  priceLinkUrl: string;
  textColor1: string;
  textColor2: string;
  backgroundColor: string;
}

const PriceCard = ({
  priceLinkText,
  pricePlan,
  pricePlanDescription,
  priceServices,
  textColor1,
  textColor2,
  backgroundColor,
}: PriceProps) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="w-full p-6 rounded-lg flex flex-col justify-between gap-4 md:gap-6 lg:gap-8 shadow-sm"
    >
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-3 lg:gap-4">
          <p
            style={{ color: textColor1 }}
            className="font-medium text-lg lg:text-xl"
          >
            {pricePlan}
          </p>
          <p style={{ color: textColor2 }} className="lg:text-lg">
            {pricePlanDescription}
          </p>
        </div>
        <div>{priceServices}</div>
      </div>
      <button className="bg-white w-full py-3 text-[#4328EB] font- shadow-sm rounded self-end">
        {priceLinkText}
      </button>
    </div>
  );
};

const ListContent = ({
  listItems,
  textColor,
  price,
}: {
  price: ReactNode;
  textColor: string;
  listItems: string[];
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
      {price}
      <div className="flex flex-col gap-2 lg:gap-4">
        {listItems.map((service_description, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-4"
              style={{ color: textColor }}
            >
              <ReactSVG src={"/Services/Check.svg"} width={16} height={16} />
              <p>{service_description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="px-5 py-6 md:py-14 md:px-14 lg:px-20 flex flex-col items-center gap-10 lg:gap-14">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#172026]">
          Flexible plans for you
        </h2>
        <p className="text-[#36485C] lg:text-lg">No hidden fees!</p>
      </div>
      <div className="flex justify-between gap-4 flex-col lg:flex-row w-full">
        <PriceCard
          pricePlan="Free Trial"
          pricePlanDescription="Perfect for testing the waters"
          priceServices={
            <ListContent
              price={
                <p className="text-2xl lg:text-3xl font-medium">
                  $0<span className="text-[#5F7896]">/mo</span>
                </p>
              }
              textColor="#36485C"
              listItems={[
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Sed do eiusmod tempor incididunt ut labore",
              ]}
            />
          }
          priceLinkText="Start Trial"
          priceLinkUrl=""
          textColor1="#4328EB"
          textColor2="#36485C"
          backgroundColor="#F5F4FF"
        />
        <PriceCard
          pricePlan="Business"
          pricePlanDescription="Perfect for small businesses"
          priceServices={
            <ListContent
              price={
                <p className="text-2xl lg:text-3xl text-white font-medium">
                  $500<span className="">/mo</span>
                </p>
              }
              textColor="#F4F8FA"
              listItems={[
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Sed do eiusmod tempor incididunt ut labore",
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
              ]}
            />
          }
          priceLinkText="Get Started"
          priceLinkUrl=""
          textColor1="#FFFFFF"
          textColor2="#F4F8FA"
          backgroundColor="#4328EB"
        />
        <PriceCard
          pricePlan="Enterprise"
          pricePlanDescription="Perfect for big companies"
          priceServices={
            <ListContent
              price={
                <p className="text-2xl lg:text-3xl text-[#172026] font-medium">
                  Custom
                </p>
              }
              textColor="#36485C"
              listItems={[
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Sed do eiusmod tempor incididunt ut labore",
              ]}
            />
          }
          priceLinkText="Contact Us"
          priceLinkUrl=""
          textColor1="#4328EB"
          textColor2="#36485C"
          backgroundColor="#F5F4FF"
        />
      </div>
    </div>
  );
};

export default Pricing;
