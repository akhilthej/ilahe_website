import React from 'react';

const BasicModeling = () => {
  return (
    <div className="cursor-default section relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          LEVEL - BASIC MODELING (3 Days)
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              INTRODUCTION TO MODELLING & POSING
            </h3>
            <p className="text-gray-600 mb-4">
              Learn the fundamentals of modeling, including how to pose effectively and project your personality. Understand the basics of grooming and fitness for aspiring models.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              BASIC RUNWAY WALK & POSTURE
            </h3>
            <p className="text-gray-600 mb-4">
              Master the essential techniques for walking the runway with confidence. Focus on posture and movement to create a strong presence on the catwalk.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              CONFIDENCE ON CAMERA
            </h3>
            <p className="text-gray-600">
              Develop the skills to present yourself confidently in front of the camera. Learn how to engage with the lens and enhance your overall presentation.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href='https://api.whatsapp.com/send?phone=+918096598155&text=Applying for LEVEL-Basic Modeling SCHOOL' className="bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-600">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicModeling;