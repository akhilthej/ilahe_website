import React from 'react';


function Dashboard() {

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



    </main>
  );
}

export default Dashboard;
