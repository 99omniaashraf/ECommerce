import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import signup from "../assets/images/signup.png";

function Signup() {
  return (
    <div className="flex h-screen">

      {/* القسم الأيسر: نموذج التسجيل */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-6">

        {/* عنوان النموذج */}
        <h2 className="text-xl font-semibold mb-4">Create an Account</h2>

        {/* النموذج */}
        <form className="w-full max-w-sm grid grid-cols-1 gap-3">
          {/* الاسم الكامل */}
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full text-sm"
          />

          {/* البريد الإلكتروني */}
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full text-sm"
          />

          {/* كلمة المرور */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full text-sm"
          />

          {/* رقم الهاتف وتاريخ الميلاد */}
          <div className="grid grid-cols-2 gap-2">
            <input
              type="tel"
              placeholder="Phone"
              className="input input-bordered text-sm"
            />
            <input
              type="date"
              className="input input-bordered text-sm"
            />
          </div>

          {/* الجنس */}
          <select className="input input-bordered w-full text-sm">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* العنوان */}
          <textarea
            placeholder="Address"
            className="textarea textarea-bordered w-full text-sm"
            rows="2"
          ></textarea>

          {/* زر التسجيل */}
          <button className="btn btn-primary w-full text-sm">Sign Up</button>
        </form>

        {/* خيارات تسجيل الدخول باستخدام الشبكات الاجتماعية */}
        <div className="divider mt-4 mb-2">or</div>
        <div className="flex flex-row space-x-2">
          <button className="btn btn-outline flex items-center px-3 py-2 text-sm">
            <FaFacebook className="mr-1 text-blue-600" size={16} />
            Facebook
          </button>
          <button className="btn btn-outline flex items-center px-3 py-2 text-sm">
            <FaGoogle className="mr-1 text-red-600" size={16} />
            Google
          </button>
        </div>

        {/* رسالة لتسجيل الدخول */}
        <p className="mt-4 text-xs text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 underline">
            Log in
          </a>
        </p>
      </div>

      {/* القسم الأيمن: صورة جانبية */}
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
