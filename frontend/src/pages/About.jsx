import React, { useState } from "react";
import picture5 from "../assets/images/picture5.jpg";
import picture7 from "../assets/images/picture7.jpg";
import picture1 from "../assets/images/picture1.jpg";

function About() {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100 text-gray-800 relative">
      {/* إضافة رمز الإغلاق */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-3xl text-gray-800 hover:text-red-600"
      >
        &times;
      </button>

      <h1 className="text-4xl font-bold text-center mb-8">About Pottery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={picture5}
            alt="Ancient Pottery"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={picture7}
            alt="Traditional Pottery"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={picture1}
            alt="Modern Pottery"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">History of Pottery</h2>
        <p className="text-lg leading-relaxed">
          Pottery is one of the oldest human inventions, originating thousands
          of years ago during the Neolithic period. Early pottery was made by
          hand and was used primarily for storing food and water. Over time,
          pottery became an art form, with intricate designs and techniques
          evolving across cultures. Today, pottery reflects a blend of ancient
          traditions and modern innovations, showcasing the creativity and
          craftsmanship of artisans worldwide.
        </p>
      </div>
    </div>
  );
}

export default About;
