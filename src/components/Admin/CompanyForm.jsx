import React, { useState } from "react";
import "../../styles/user.css";

const CompanyForm = () => {
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanies([...companies, { ...formData, id: Date.now() }]);
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

  // Handle deletion
  const handleDelete = (id) => {
    const updatedCompanies = companies.filter((company) => company.id !== id);
    setCompanies(updatedCompanies);
  };

  // Handle editing
  const handleEdit = (id) => {
    const companyToEdit = companies.find((company) => company.id === id);
    setFormData(companyToEdit);
    handleDelete(id);
  };

  return (
    <div className="admin-container">
      <h2>Company Management</h2>
      <form onSubmit={handleSubmit} className="form-container">
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
        <button type="submit" className="btn btn-primary">Add/Update Company</button>
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
              <td>
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer">
                  Profile
                </a>
              </td>
              <td>{company.email}</td>
              <td>{company.phone}</td>
              <td>
                <button className="btn btn-secondary" onClick={() => handleEdit(company.id)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(company.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyForm;
