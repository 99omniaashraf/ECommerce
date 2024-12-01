import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import picture4 from "../assets/images/picture4.jpg";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center bg-gray-900 bg-opacity-60 relative">
      <div className="hidden lg:block">
        <img
          src={picture4}
          alt="Contact"
          className="w-full h-screen object-cover opacity-60"
        />
      </div>

      <div className="p-8 flex flex-col justify-center relative z-10">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-3xl text-white hover:text-red-600"
        >
          &times;
        </button>

        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Contact Us
        </h1>

        {isSubmitted ? (
          <div className="bg-green-500 text-white p-4 rounded-md text-center shadow-lg">
            Message sent successfully!
          </div>
        ) : (
          <form
            className="bg-gray-800 bg-opacity-70 shadow-lg rounded-lg p-6 w-full mx-auto text-white"
            style={{ maxWidth: "600px" }}
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="mt-1 block w-full p-2 border border-gray-500 rounded-md bg-transparent focus:ring-indigo-500 focus:border-indigo-500 text-white"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="mt-1 block w-full p-2 border border-gray-500 rounded-md bg-transparent focus:ring-indigo-500 focus:border-indigo-500 text-white"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                className="mt-1 block w-full p-2 border border-gray-500 rounded-md bg-transparent focus:ring-indigo-500 focus:border-indigo-500 text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
