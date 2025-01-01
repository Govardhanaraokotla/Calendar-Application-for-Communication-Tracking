import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Import profile icon

const TopBar = () => {
  return (
    <div className="top-bar">
      {/* App Title */}
      <div className="app-title">Calendar App</div>

      {/* Profile Button */}
      <div className="profile-button">
        <FaUserCircle size={24} />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default TopBar;
