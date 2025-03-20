import React from 'react';

const EliteModeling = () => {
  return (
    <div className="cursor-default section relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          LEVEL-ELITE MODELING (7 Days)
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              RUNWAY TRAINING & EXPRESSIONS
            </h3>
            <p className="text-gray-600 mb-4">
              Master the art of walking the runway with confidence and poise. Learn how to express emotions and connect with the audience through your movements and facial expressions.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              EDITORIAL & COMMERCIAL MODELLING
            </h3>
            <p className="text-gray-600 mb-4">
              Understand the differences between editorial and commercial modeling. Learn how to adapt your poses and expressions for various types of shoots and campaigns.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              SOCIAL MEDIA BRANDING FOR MODELS
            </h3>
            <p className="text-gray-600">
              Discover how to build your personal brand on social media platforms. Learn strategies for engaging with your audience and showcasing your modeling work effectively.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href='https://api.whatsapp.com/send?phone=+918096598155&text=Applying for LEVEL-Elite Modeling SCHOOL' className="bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-600">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default EliteModeling;