import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import signup from "../assets/images/signup.png";

function Login() {
  return (
    <div className="flex h-screen">

      {/* القسم الأيسر: نموذج تسجيل الدخول */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">

        {/* عنوان النموذج */}
        <h2 className="text-2xl font-bold mb-6">Log In to Your Account</h2>

        {/* النموذج */}
        <form className="w-full max-w-sm space-y-4">
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
          <button className="btn btn-primary w-full">Log In</button>
        </form>

        {/* تقسيم بين الخيارات */}
        <div className="divider">or</div>

        {/* خيارات تسجيل الدخول باستخدام الشبكات الاجتماعية */}
        <div className="flex flex-row space-x-4">
          <button className="btn btn-outline flex items-center">
            <FaFacebook className="mr-2 text-blue-600" size={20} />
            Facebook
          </button>
          <button className="btn btn-outline flex items-center">
            <FaGoogle className="mr-2 text-red-600" size={20} />
            Google
          </button>
        </div>

        {/* رسالة لإنشاء حساب جديد */}
        <p className="mt-6 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 underline">
            Sign Up
          </a>
        </p>
      </div>

      {/* القسم الأيمن: صورة جانبية */}
      <div className="w-1/2">
        <img
          src={signup}
          alt="Login Illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Login;
