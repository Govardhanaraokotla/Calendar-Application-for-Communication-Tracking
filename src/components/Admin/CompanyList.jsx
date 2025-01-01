import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const CompanyList = ({ companies, deleteCompany, editCompany }) => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>
      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="btn btn-profile" onClick={() => navigate("/profile")}>Back to Profile</button>
        <button className="btn btn-methods" onClick={() => navigate("/methods")}>Go to Methods</button>
      </div>

      {/* Company List Table */}
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
                <a href={company.linkedin} target="_blank" rel="noreferrer">Profile</a>
              </td>
              <td>{company.email}</td>
              <td>{company.phone}</td>
              <td>
                <button onClick={() => editCompany(company)}>Edit</button>
                <button onClick={() => deleteCompany(company.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
