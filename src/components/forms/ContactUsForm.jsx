import React from "react";

const ContactUsForm = () => {
  // todo
  const handleContactForm = () => {
    console.log("contact form");
  };
  
  return (
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
  );
};

export default ContactUsForm;
