import React from 'react';

const FinishingSchoolBasic = () => {
  return (
    <section className="cursor-default section relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">
          LEVEL-BASIC FINISHING SCHOOL (3 Days)
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="py-4 px-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              PERSONAL GROOMING & HYGIENE
            </h3>
            <p className="text-gray-600">
              Learn the essentials of personal grooming and hygiene to enhance your overall appearance and confidence.
            </p>
          </div>

          <div className="py-4 px-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              BASIC COMMUNICATION SKILLS
            </h3>
            <p className="text-gray-600">
              Develop fundamental communication skills to express yourself clearly and effectively in various situations.
            </p>
          </div>

          <div className="py-4 px-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              INTRODUCTION TO BODY LANGUAGE
            </h3>
            <p className="text-gray-600">
              Understand the basics of body language and how it impacts communication and personal interactions.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href='https://api.whatsapp.com/send?phone=+918096598155&text=Applying for LEVEL-BASIC FINISHING SCHOOL' className="bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-600">
            Apply
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinishingSchoolBasic;