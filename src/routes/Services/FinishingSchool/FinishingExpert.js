import React from 'react';

const ExpertFinishingSchool = () => {
  return (
    <div className="cursor-default section relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          LEVEL-EXPERT FINISHING SCHOOL (15 Days)
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              PERSONALITY DEVELOPMENT & IMAGE MANAGEMENT
            </h3>
            <p className="text-gray-600 mb-4">
              Learn about interpersonal communication and body language. Develop problem-solving skills and understand the art of individualism. Examine your personal grooming and professional clothing. Create your own unique style.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              COLOUR ANALYSIS & WARDROBE STYLING
            </h3>
            <p className="text-gray-600 mb-4">
              Discover how to choose colors that complement your skin tone and enhance your overall appearance. Learn wardrobe styling techniques to create versatile outfits for various occasions.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              PROFESSIONAL NETWORKING & SOCIAL SKILLS
            </h3>
            <p className="text-gray-600 mb-4">
              Master the art of networking and develop essential social skills to build meaningful professional relationships. Learn how to navigate social settings with confidence and poise.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href='https://api.whatsapp.com/send?phone=+918096598155&text=Applying for LEVEL-Expert FINISHING SCHOOL' className="bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-600">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpertFinishingSchool;