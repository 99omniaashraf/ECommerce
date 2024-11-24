import React, { useState, useEffect } from "react";
import picture3 from "../assets/images/picture3.jpg";
import picture4 from "../assets/images/picture4.jpg";

function Hero() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById("hero");

    let offset = 0;
    const backgroundMove = () => {
      offset += 1;

      heroElement.style.backgroundPosition = `${offset}% 0%, ${100 - offset}% 0%`;

      if (offset >= 100) {
        offset = 0;
      }
    };

    const intervalId = setInterval(backgroundMove, 50);

    return () => clearInterval(intervalId);
  }, []);

  const handleGetStarted = () => {
    setShowNavbar(true); // عرض النافذة الرأسية
  };

  const handleCloseNavbar = () => {
    setShowNavbar(false); // إغلاق النافذة الرأسية
  };

  return (
    <div>
      {/* Vertical Navbar */}
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="p-8 rounded-lg shadow-lg w-80 bg-opacity-70 bg-gray-800 text-white relative">
            <button
              onClick={handleCloseNavbar}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-5 text-center">Navigation</h2>
            <ul className="space-y-4 text-center">
              <li>
                <a href="#home" className="block hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#product" className="block hover:underline">
                  Product
                </a>
              </li>
              <li>
                <a href="#contact" className="block hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div
        id="hero"
        className={`hero min-h-screen ${showNavbar ? "opacity-60" : "opacity-100"}`}
        style={{
          backgroundImage: `url(${picture3}), url(${picture4})`,
          backgroundSize: "cover",
          backgroundPosition: "0% 0%, 100% 0%",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md relative z-10">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 bg-black z-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
