import React from "react";
import Service from "./Service";
import Image from "next/image";
import NumberTicker from "./ui/number-ticker";

const DesriptionListComponent1 = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      {[
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt ut labore",
      ].map((service_description, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-4 lg:text-lg text-[#36485C]"
          >
            <Image
              src={"/Services/Check.svg"}
              alt="check-icon"
              width={24}
              height={24}
            />
            <p>{service_description}</p>
          </div>
        );
      })}{" "}
    </div>
  );
};

const DesriptionListComponent2 = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="font-medium text-xl lg:text-3xl">
          <NumberTicker value={100} />
          <span>+</span>
        </p>
        <p className="text-[#5F7896] lg:text-lg">Lorem ipsum dolor sit</p>
      </div>
      <div>
        <p className="font-medium text-xl lg:text-3xl">
          <NumberTicker value={800} />
          <span>+</span>
        </p>
        <p className="text-[#5F7896] lg:text-lg">Conse adipiscing elit</p>
      </div>
    </div>
  );
};

const descriptionListComponents = [
  <DesriptionListComponent1 key={1} />,
  <DesriptionListComponent2 key={2} />,
];

const Services = () => {
  return (
    <div className="px-5 py-14 md:px-14 md:py-20 lg:px-20 lg:p-28 flex flex-col gap-14 md:gap-16 lg:gap-20 ">
      <Service
        serviceTag="Sales Monitoring"
        serviceTitle="Simplify your sales monitoring"
        serviceDescription="Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. "
        serviceDescriptionList={descriptionListComponents[0]}
        serviceLinkUrl=""
        serviceImageUrl="/Services/Image (1).svg"
        rowReverse={false}
        primaryColor="#0085FF"
        secondaryColor="#E3F1FF"
      />
      <Service
        serviceTag="Customer Support"
        serviceTitle="Get in touch with your customers"
        serviceDescription="Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. "
        serviceDescriptionList={descriptionListComponents[0]}
        serviceLinkUrl=""
        serviceImageUrl="/Services/Image (2).svg"
        rowReverse={true}
        primaryColor="#00A424"
        secondaryColor="#DCFCDD"
      />
      <Service
        serviceTag="Growth Monitoring"
        serviceTitle="Monitor your site’s new subscribers "
        serviceDescription="Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. "
        serviceDescriptionList={descriptionListComponents[1]}
        serviceLinkUrl=""
        serviceImageUrl="/Services/Image (3).svg"
        rowReverse={false}
        primaryColor="#EB2891"
        secondaryColor="#FDE7F3"
      />
    </div>
  );
};

export default Services;
