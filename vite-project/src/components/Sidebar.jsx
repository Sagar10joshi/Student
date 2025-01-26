// components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <button
        className="p-4 text-left hover:bg-gray-700"
        onClick={() => navigate('/students')}
      >
        Students Page
      </button>
      <button
        className="p-4 text-left hover:bg-gray-700"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
