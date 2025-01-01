import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for page navigation
import "../../styles/admin.css"; // Admin-specific styles

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    linkedin: "",
    email: "",
    phone: "",
    comments: "",
    periodicity: "2 Weeks",
  });
  
  const navigate = useNavigate(); // Hook for navigation

  // Handle Form Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or Update Company
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setCompanies(companies.map((company) => (company.id === formData.id ? formData : company)));
    } else {
      setCompanies([...companies, { ...formData, id: Date.now() }]);
    }
    resetForm();
  };

  // Edit Company
  const handleEdit = (company) => {
    setFormData(company);
  };

  // Delete Company
  const handleDelete = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  // Reset Form
  const resetForm = () => {
    setFormData({
      name: "",
      location: "",
      linkedin: "",
      email: "",
      phone: "",
      comments: "",
      periodicity: "2 Weeks",
    });
  };

  return (
    <div className="admin-container">
      <h2>Company Management</h2>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="btn btn-profile" onClick={() => navigate("/profile")}>Back to Profile</button>
        <button className="btn btn-methods" onClick={() => navigate("/methods")}>Go to Methods</button>
      </div>

      {/* Company Management Form */}
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <input type="url" name="linkedin" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <textarea name="comments" placeholder="Comments" value={formData.comments} onChange={handleChange}></textarea>
        <select name="periodicity" value={formData.periodicity} onChange={handleChange}>
          <option value="1 Week">1 Week</option>
          <option value="2 Weeks">2 Weeks</option>
          <option value="1 Month">1 Month</option>
        </select>
        <button type="submit">Add/Update Company</button>
      </form>

      <h3>Company List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>LinkedIn</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.location}</td>
              <td><a href={company.linkedin} target="_blank" rel="noreferrer">Profile</a></td>
              <td>{company.email}</td>
              <td>{company.phone}</td>
              <td>
                <button onClick={() => handleEdit(company)}>Edit</button>
                <button onClick={() => handleDelete(company.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyManagement;
