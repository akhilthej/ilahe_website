import React from 'react';

const ExpertModeling = () => {
  return (
    <div className="cursor-default section relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          LEVEL-EXPERT MODELING
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Modeling Industry Overview
            </h3>
            <p className="text-gray-600 mb-4">
              Aspiring fashion models have the opportunity to receive training and develop into professionals through ILAHE’s Advanced Modeling Course. Plus, it offers possibilities for employment in the attractive fields of fashion, glitz, and advertising. This advanced education prepares them to use their talents for runway, editorial, print, fashion products, and even to make a name for themselves in the world of beauty pageants.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Training Details
            </h3>
            <ul className="list-disc text-gray-600 ml-6">
              <li>Training for print modeling</li>
              <li>Practice shoots</li>
              <li>Photoshoot poses</li>
              <li>Poses with props</li>
              <li>Training in ramp walk and fashion show choreography</li>
              <li>Grooming hair and make-up classes</li>
              <li>Workout routine and diet plan</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
        <a href='https://api.whatsapp.com/send?phone=+918096598155&text=Applying for LEVEL-Expert Modeling SCHOOL' className="bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-600">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpertModeling;
