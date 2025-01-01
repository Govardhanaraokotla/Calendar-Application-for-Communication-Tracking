import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "../../styles/user.css"; // Import styles

const Dashboard = () => {
  const navigate = useNavigate(); // Navigation hook
  const [companies, setCompanies] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  // Sample Data
  useEffect(() => {
    setCompanies([
      { id: 1, name: "XYZ Corp", lastComm: "Email (10 Sep)", nextComm: "LinkedIn Post (15 Sep)", status: "Due" },
      { id: 2, name: "ABC Ltd.", lastComm: "Call (8 Sep)", nextComm: "Email (18 Sep)", status: "Overdue" }
    ]);
  }, []);

  // Filter companies based on status and search
  const filteredCompanies = companies.filter(company => {
    const matchesFilter = filter === 'all' || company.status.toLowerCase() === filter.toLowerCase();
    const matchesSearch = company.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Dynamic class for status
  const getStatusClass = (status) => {
    switch (status) {
      case "Due": return "status-due";
      case "Overdue": return "status-overdue";
      default: return "status-clear";
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Company Communication Dashboard</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Company Name..."
        className="search-bar enhanced-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="filter">Filter by Status: </label>
        <select
          id="filter"
          value={filter}
          className="enhanced-input"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Due">Due</option>
          <option value="Overdue">Overdue</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Last Communication</th>
              <th>Next Communication</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => (
              <tr key={company.id}>
                <td>{company.name}</td>
                <td>{company.lastComm}</td>
                <td>{company.nextComm}</td>
                <td className={getStatusClass(company.status)}>{company.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
        <button 
          className="btn btn-primary back-button" 
          onClick={() => navigate("/")} // Navigate to the main or starting page
        >
          ← Back to Profile
        </button>
        <button 
          className="btn btn-primary back-button" 
          onClick={() => navigate("/calendar")} // Navigate to calendar view
        >
          Go to Calendar View 
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
