import React, { useState } from "react";
import picture1 from "../assets/images/picture1.jpg";
import { FaGoogle, FaFacebook, FaLinkedin, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const closeSignup = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    navigate("/");
    return null;
  }

  return (
    <div className="relative">
      
      <button
        onClick={closeSignup}
        className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-900"
      >
        &times;
      </button>

      <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-1/2">
            <img
              src={picture1}
              alt="Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Login or sign up to start learning
            </h2>

            <div className="flex justify-center gap-4 mb-6">
              
              <button className="btn btn-outline text-sm flex items-center relative group">
                <FaGoogle className="text-red-600" />
                <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black px-2 py-1 rounded-md shadow transition-all duration-300">
                  Google
                </span>
              </button>
              <button className="btn btn-outline text-sm flex items-center relative group">
                <FaFacebook className="text-blue-600" />
                <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black px-2 py-1 rounded-md shadow transition-all duration-300">
                  Facebook
                </span>
              </button>
              <button className="btn btn-outline text-sm flex items-center relative group">
                <FaLinkedin className="text-blue-500" />
                <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black px-2 py-1 rounded-md shadow transition-all duration-300">
                  LinkedIn
                </span>
              </button>
              <button className="btn btn-outline text-sm flex items-center relative group">
                <FaApple className="text-black" />
                <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black px-2 py-1 rounded-md shadow transition-all duration-300">
                  Apple
                </span>
              </button>
            </div>

            <div className="divider mb-6">or</div>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="What's your e-mail?"
                className="input input-bordered w-full"
              />
              <input
                type="password"
                placeholder="Your password?"
                className="input input-bordered w-full"
              />
              <button className="btn btn-primary w-full">Enter</button>
            </form>

            <div className="flex justify-between text-sm mt-4">
              <button
                onClick={() => navigate("/login")}
                className="text-blue-500 underline"
              >
                Create Account
              </button>
              <a href="/forgot-password" className="text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
