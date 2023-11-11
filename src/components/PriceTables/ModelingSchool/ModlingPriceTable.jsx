import React, { useState } from 'react';
import ComponentA from '../ModelingSchool/ModelingOnline';
import ComponentB from '../ModelingSchool/ModelingOffline';

const App = () => {
  const [showComponentA, setShowComponentA] = useState(true);

  const toggleComponent = () => {
    setShowComponentA(!showComponentA);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-5 sm:pt-10">
        <h1>Online/Offline</h1><input
          type="checkbox"
          className="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
          onClick={toggleComponent}
        />
        {showComponentA ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  );
};

export default App;
