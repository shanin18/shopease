import React from "react";
import Delivery from "../../svgs/Delivery";
import CustomerServiceSVG from "../../svgs/CustomerServiceSVG";
import SecureSVG from "../../svgs/SecureSVG";

const Services = () => {
  const services = [
    {
      name: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      icon: <Delivery />,
    },
    {
      name: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      icon: <CustomerServiceSVG />,
    },
    {
      name: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
      icon: <SecureSVG />,
    },
  ];

  return (
    <section>
      <div className="text-gray-600 body-font pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:mx-0">
        {services?.map((service) => (
          <div
            key={service.name}
            className="w-full p-4 flex flex-col text-center items-center"
            bis_skin_checked="1"
          >
            <div className="p-4 mb-5">
              <span className="relative flex">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full bg-black p-4">
                  {service.icon}
                </span>
              </span>
            </div>
            <div className="flex-grow" bis_skin_checked="1">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                {service.name}
              </h2>
              <p className="leading-relaxed text-base">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
