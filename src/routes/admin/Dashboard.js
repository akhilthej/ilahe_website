import React from 'react';


function Dashboard() {
  const googleSheetsLink = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJ83sa4Z6EJ9N8VJHbl_InJPAqF0sn7XZFb6zfRl9XVVkaAfQd6vUXO-C-Wm2Z2rQrA3OQhiwm4DRb/pubhtml?gid=0&single=true';

  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}

  return (
    <main>


    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
        {/* Your content for the first column */}
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the dashboard!</p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
        {/* Your content for the second column */}
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the dashboard!</p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
        {/* Your content for the third column */}
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the dashboard!</p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
        {/* Your content for the fourth column */}
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the dashboard!</p>
      </div>
      {/* Add more columns as needed */}
    </div>
  


    <section>
    <div className="flex">
      <div className="bg-white p-8 rounded shadow-md w-96">
      
        <button onClick={handleClick}>Logout</button>
       
      </div>
    </div>
    
    </section>


  <div className="w-screen h-screen flex items-center justify-center">
      <iframe
        src={googleSheetsLink}
        className="w-full h-full"
        frameBorder="0"
        scrolling="yes" // Enable scrolling within the iframe
      ></iframe>
    </div>

    </main>
  );
}

export default Dashboard;
