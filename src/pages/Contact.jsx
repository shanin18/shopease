import React from "react";
import TelephoneSVG from "../svgs/TelephoneSVG";
import EmailSVG from "../svgs/EmailSVG";
import ContactUsForm from "../components/forms/ContactUsForm";
import useTitle from "../hooks/useTitle";

const Contact = () => {
  useTitle("Contact Us")

  return (
    <section className="text-gray-600 body-font relative">
      <h1 className="text-gray-900 text-3xl lg:text-4xl title-font font-bold mb-8 text-center mt-8">
        Contact Us
      </h1>
      <div
        className="container px-5 pb-24 pt-8 mx-auto flex sm:flex-nowrap flex-wrap"
        bis_skin_checked="1"
      >
        <div
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full sm:mr-10 p-10 shadow-xl"
          bis_skin_checked="1"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-5">
              <div className="bg-red-500 w-11 h-11 flex items-center justify-center rounded-full">
                <TelephoneSVG />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Call To Us</h3>
              </div>
            </div>
            <p className="text-lg font-medium">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-lg font-medium">Phone: +8801540003639</p>
          </div>
          <hr className="my-8" />
          <div className="space-y-4">
            <div className="flex items-center gap-5">
              <div className="bg-red-500 w-11 h-11 flex items-center justify-center rounded-full">
                <EmailSVG />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Write To US</h3>
              </div>
            </div>
            <p className="text-lg font-medium">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-lg font-medium">
              Emails: customer@exclusive.com
            </p>
            <p className="text-lg font-medium">
              Emails: support@exclusive.com{" "}
            </p>
          </div>
        </div>
        <div
          className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden p-10 shadow-xl mt-8 md:mt-0"
          bis_skin_checked="1"
        >
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
