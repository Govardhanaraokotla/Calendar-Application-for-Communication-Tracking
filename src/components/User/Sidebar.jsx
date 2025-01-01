import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaBuilding, FaTasks, FaChartPie } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      <nav>
        <Link to="/dashboard" className="menu-item">
          <FaChartPie /> <span>Dashboard</span>
        </Link>
        <Link to="/calendar" className="menu-item">
          <FaCalendarAlt /> <span>Calendar</span>
        </Link>
        <Link to="/admin/companies" className="menu-item">
          <FaBuilding /> <span>Companies</span>
        </Link>
        <Link to="/admin/methods" className="menu-item">
          <FaTasks /> <span>Methods</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
