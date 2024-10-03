"use client";
import React from "react";
import ShimmerButton from "./ui/shimmer-button";
import { ReactSVG } from "react-svg";

const ContactCard = () => {
  return (
    <div className="bg-[url(/Gradient.svg)] bg-cover bg-center rounded-2xl flex flex-col items-center py-14 lg:py-20 text-white  gap-10 lg:gap-10 px-9">
      <div className="flex flex-col gap-6 lg:gap-12 text-center">
        <h2 className="font-medium max-w-[600px] text-3xl md:text-4xl lg:text-5xl">
          Monitor your website like a pro
        </h2>
        <p className="lg:text-lg">
          Join over 800+ happy site owners boosting productivity and efficiency!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 font-medium text-sm lg:text-lg">
        <ShimmerButton
          className="shadow-2xl px-8 py-4  rounded"
          shimmerColor="#EB2891"
          background="#ffffff"
          shimmerSize="0.1em"
        >
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:from-white dark:to-slate-900/10 lg:text-lg text-[#EB2891]">
            Try for Free
          </span>
        </ShimmerButton>

        <button className="flex items-center gap-3 hover:gap-4 text-white">
          <p className="">View Pricing</p>
          <div className="bg-white rounded-full w-fit p-2 text-[#EB2891]">
            <ReactSVG src={"/Hero/Arrow-Right.svg"} width={16} height={16} />
          </div>
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="px-5 py-6 md:py-14 md:px-14 lg:px-20">
      <ContactCard />
    </div>
  );
};

export default Contact;
