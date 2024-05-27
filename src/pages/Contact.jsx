import React from "react";
import TelephoneSVG from "../svgs/TelephoneSVG";
import EmailSVG from "../svgs/EmailSVG";

const Contact = () => {

    // todo
    const handleContactForm = () =>{
        console.log("contact form")
    }
  return (
    <section class="text-gray-600 body-font relative">
      <div
        class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"
        bis_skin_checked="1"
      >
        <div
          class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full sm:mr-10 p-10 shadow-xl"
          bis_skin_checked="1"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-5">
              <div className="bg-red-500 w-fit rounded-full p-3">
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
              <div className="bg-red-500 w-fit rounded-full p-3">
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
          class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden p-10 shadow-xl mt-8 md:mt-0"
          bis_skin_checked="1"
        >
          <form onClick={handleContactForm} className="space-y-8">
            <div className="flex flex-wrap gap-5">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                class="w-full bg-gray-100 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                class="w-full bg-gray-100 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone"
                class="w-full bg-gray-100 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Message"
              class="w-full bg-gray-100 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-36 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
            ></textarea>
            <div className="text-right">
              <input
                type="submit"
                value="Send Message"
                class="text-white btn bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-base"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
