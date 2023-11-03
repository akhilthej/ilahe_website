import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page or show an error message.
    navigate('/login'); // You can replace this with an error message if needed.
    return null;
  }

  return (
    <div>
      <h2>Welcome Berrifdsdsfsdfsd</h2>
      {/* Your dashboard content goes here */}
    </div>
  );
};

export default Dashboard;
