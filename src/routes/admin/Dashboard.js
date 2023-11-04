import React from 'react';


function Dashboard() {
  const googleSheetsLink = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJ83sa4Z6EJ9N8VJHbl_InJPAqF0sn7XZFb6zfRl9XVVkaAfQd6vUXO-C-Wm2Z2rQrA3OQhiwm4DRb/pubhtml?gid=0&single=true';

  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}

  return (
    <main>

    <section>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the dashboard!</p>
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
