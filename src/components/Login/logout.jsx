// Logout.js
import './login.css'
import React from 'react';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // Call the logout function passed as a prop
    onLogout();
  };

  return (
    <div className='app'>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button className="btnCheck" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
