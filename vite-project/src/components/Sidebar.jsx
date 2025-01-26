import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidestyle.css'

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="bar">
      {/* <button
        className="btn"
        onClick={() => navigate('/students')}
      >
        Students Page
      </button> */}
      <button
        className="btn"
        onClick={onLogout}
      >
        Logout
      </button> <br />
       <br />  
    </div>
  );
};

export default Sidebar;
