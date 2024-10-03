"use client";
import React from "react";
import Image from "next/image";
import ShimmerButton from "./ui/shimmer-button";
import { ReactSVG } from "react-svg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center bg-[url('/Hero/hero-bg.svg')] bg-cover bg-center min-h-screen px-5 py-4 md:px-14 md:py-4 lg:px-20 lg:pt-11 lg:pb-14 gap-10">
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="font-medium text-4xl md:text-5xl md:font-semibold lg:text-6xl text-[#172026] max-w-[650px] tracking-wide">
          Start monitoring your website like a pro
        </h1>
        <p className="max-w-[800px] md:text-lg text-[#36485C]">
          Get a bird&apos;s eye view with our customizable dashboard. Stay on
          top of things! Revamp your work process with our game-changing
          feature. Boost productivity and efficiency!
        </p>
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10 font-medium text-sm lg:text-lg">
          <ShimmerButton
            className="shadow-2xl px-8 py-4 bg-[#4328EB] text-white rounded"
            shimmerColor="#ffffff"
            background="#4328EB"
            shimmerSize="0.05em"
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Try for Free
            </span>
          </ShimmerButton>

          <button className="flex items-center gap-3 hover:gap-4 text-[#4328EB]">
            <p className="">View Pricing</p>
            <div className="bg-[#D5CFFA80] rounded-full w-fit p-2">
              <ReactSVG src={"/Hero/Arrow-Right.svg"} width={16} height={16} />
            </div>
          </button>
        </div>
      </div>
      <Image
        src={"/Hero/Image.svg"}
        alt="demo-image"
        width={1150}
        height={738}
      />

      <div className="flex flex-col items-center xl:flex-row gap-5 xl:gap-16 md:gap:10 w-full justify-center">
        <p className="text-white md:text-lg">Trusted by these companies</p>
        <div className="flex items-center flex-wrap justify-center md:justify-between gap-6 md:gap-10 lg:gap-20">
          <Image
            src={"/sponsors/Google.svg"}
            alt="google-logo"
            width={103}
            height={33}
          />
          <Image
            src={"/sponsors/Slack.svg"}
            alt="slack-logo"
            width={103}
            height={33}
          />
          <Image
            src={"/sponsors/Trustpilot.svg"}
            alt="trustpilot-logo"
            width={103}
            height={33}
          />
          <Image
            src={"/sponsors/CNN logo.svg"}
            alt="cnn-logo"
            width={83}
            height={23}
          />
          <Image
            src={"/sponsors/Clutch.svg"}
            alt="clutch-logo"
            width={103}
            height={33}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
