import React from 'react';

const FinishingSchoolBasic = () => {
  return (
    <section className="cursor-default section relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">
          LEVEL-BASIC FINISHING SCHOOL
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="py-4 px-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              COMMUNICATION
            </h3>
            <p className="text-gray-600">
              Be aware of the communication requirements of your job, and utilize your personal brand to your advantage.
            </p>
          </div>

          <div className="py-4 px-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              SOCIAL & BUSINESS ETIQUETTE
            </h3>
            <p className="text-gray-600">
              You need to learn to behave in a socially and professionally appropriate manner in specific contexts that align with your personal brand.
            </p>
          </div>

          <div className="py-4 px-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              DEPORTMENT
            </h3>
            <p className="text-gray-600">
              Your personal presence will be enhanced by learning effective body language, sitting, standing, and walking.
            </p>
          </div>

          <div className="py-4 px-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              SELF-GROOMING
            </h3>
            <p className="text-gray-600">
              Take time to care for yourself and improve your personal style and presence.
            </p>
          </div>

          <div className="py-4 px-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              FASHION & STYLING
            </h3>
            <p className="text-gray-600">
              Ensure that you strike a balance between fashion and comfort in your dressing sense, your aesthetic sense, and your personal style.
            </p>
          </div>

          <div className="py-4 px-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              DRESSING ACCORDING TO BODY-TYPE
            </h3>
            <p className="text-gray-600">
              Learn how to dress according to one's body type, and how to nurture one's sense of dressing.
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
