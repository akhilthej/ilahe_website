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
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRlFveL5b_KDzBDt7HGt8d9_Q7Dvf-hMWfj7vwOBi6tEUZL7o2kCULHwGYjhP_eKXZp5SGKJU8NcNcP/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
      </div>
    </div>
    
    </section>



    </main>
  );
}

export default Dashboard;
