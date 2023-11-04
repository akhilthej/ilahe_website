import React from 'react';


function Dashboard() {
  const googleSheetsLink = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJ83sa4Z6EJ9N8VJHbl_InJPAqF0sn7XZFb6zfRl9XVVkaAfQd6vUXO-C-Wm2Z2rQrA3OQhiwm4DRb/pubhtml?gid=0&single=true';

  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}

  return (
    <main className='p-0 m-0'>
 <div className="grid grid-cols-2 md:grid-cols-2 w-full lg:grid-cols-4 gap-4 ">
      <div className="bg-blue-200 p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Total Views</h1>
      </div>

      <div className="bg-green-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      </div>
      <div className="bg-yellow-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      </div>
      <div className="bg-pink-200 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      </div>
      <div className="bg-purple-200 p-4"><h1 className="text-2xl font-bold mb-4">
      Dashboard</h1>
      <p>Welcome to the dashboard!</p>
        <p>Website Expires on</p>
        <button className='bg-black text-white px-2 py-2 rounded-lg mt-5' onClick={handleClick}>Logout</button>
        
      </div>
    
    </div>


  



    </main>
  );
}

export default Dashboard;
