import React from 'react';

const EliteFinishingSchool = () => {
  return (
    <div className="cursor-default section relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          LEVEL-ELITE FINISHING SCHOOL (7 Days)
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ADVANCED COMMUNICATION & ETIQUETTE
            </h3>
            <p className="text-gray-600 mb-4">
              Master the art of effective communication and learn the nuances of etiquette in various social and professional settings.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              DRESSING & STYLING BASICS
            </h3>
            <p className="text-gray-600 mb-4">
              Understand the fundamentals of dressing and styling to enhance your personal brand and make a lasting impression.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              CONFIDENCE BUILDING & PUBLIC SPEAKING
            </h3>
            <p className="text-gray-600 mb-4">
              Develop your self-confidence and public speaking skills to express your ideas clearly and persuasively.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href='https://api.whatsapp.com/send?phone=+918096598155&text=Applying for LEVEL-Elite FINISHING SCHOOL' className="bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-600">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default EliteFinishingSchool;