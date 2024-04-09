// DashboardPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedInUser(null);
    navigate('/'); // Navigate to the login page after logout
  };

  return (
    <div className="login-container">
      <h2>Dashboard</h2>
      <p>Welcome, {loggedInUser}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
