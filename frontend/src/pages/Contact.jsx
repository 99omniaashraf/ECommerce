import React from "react";
import picture4 from "../assets/images/picture4.jpg"; // تأكدي من وجود الصورة

function Contact() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center bg-gray-100">
      {/* Image Section */}
      <div className="hidden lg:block">
        <img
          src={picture4}
          alt="Contact"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h1>

        <form
          className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto"
          style={{ maxWidth: "600px" }} // تحديد العرض بشكل يدوي
        >
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
