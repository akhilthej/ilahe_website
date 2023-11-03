// src/Dashboard.js

import React from 'react';

const Dashboard = ({ user, logout }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
