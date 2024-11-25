import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import signup from "../assets/images/signup.png";

function Signup() {
  return (
    <div className="flex h-screen">

      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">

        <h2 className="text-2xl font-bold mb-6">Create an Account</h2>


        <form className="w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary w-full">Sign Up</button>
        </form>


        <div className="divider">or</div>


        <div className="flex flex-row space-x-4">
          <button className="btn btn-outline flex items-center">
            <FaFacebook className="mr-2 text-blue-600" size={20} />
            
          </button>
          <button className="btn btn-outline flex items-center">
            <FaGoogle className="mr-2 text-red-600" size={20} />
            
          </button>
        </div>
      </div>


      <div className="w-1/2">
        <img
          src={signup}
          alt="Signup Illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Signup;
