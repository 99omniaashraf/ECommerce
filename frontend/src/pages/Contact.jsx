import React, { useState } from "react";
import picture4 from "../assets/images/picture4.jpg";

function Contact() {
  const [isClosed, setIsClosed] = useState(false);

  // دالة لإغلاق الصفحة
  const handleClose = () => {
    setIsClosed(true);
  };

  // إذا كانت الصفحة مغلقة، لا تعرض المحتوى
  if (isClosed) {
    return null;
  }

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center bg-gray-100 relative">
      <div className="hidden lg:block">
        <img
          src={picture4}
          alt="Contact"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="p-8 flex flex-col justify-center">
        {/* إضافة رمز الإغلاق */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-3xl text-gray-800 hover:text-red-600"
        >
          &times;
        </button>

        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h1>

        <form
          className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto"
          style={{ maxWidth: "600px" }}
        >
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
