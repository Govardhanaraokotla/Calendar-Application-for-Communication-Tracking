import React, { useState } from "react";

const MethodForm = () => {
  const [methods, setMethods] = useState([
    { name: "LinkedIn Post", description: "Post on LinkedIn", sequence: 1, mandatory: true },
    { name: "LinkedIn Message", description: "Message on LinkedIn", sequence: 2, mandatory: true },
    { name: "Email", description: "Send an email", sequence: 3, mandatory: true },
    { name: "Phone Call", description: "Make a phone call", sequence: 4, mandatory: false },
    { name: "Other", description: "Other communication method", sequence: 5, mandatory: false },
  ]);

  return (
    <div className="admin-container">
      <h2>Communication Methods</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Sequence</th>
            <th>Mandatory</th>
          </tr>
        </thead>
        <tbody>
          {methods.map((method, index) => (
            <tr key={index}>
              <td>{method.name}</td>
              <td>{method.description}</td>
              <td>{method.sequence}</td>
              <td>{method.mandatory ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MethodForm;
