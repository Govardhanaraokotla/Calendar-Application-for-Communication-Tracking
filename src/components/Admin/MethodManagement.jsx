import React, { useState } from "react";

const MethodManagement = () => {
  const [methods, setMethods] = useState([
    { id: 1, name: "LinkedIn Post", description: "Post on LinkedIn", sequence: 1, mandatory: true },
    { id: 2, name: "LinkedIn Message", description: "Send LinkedIn Message", sequence: 2, mandatory: true },
    { id: 3, name: "Email", description: "Send Email", sequence: 3, mandatory: true },
    { id: 4, name: "Phone Call", description: "Make Phone Call", sequence: 4, mandatory: false },
    { id: 5, name: "Other", description: "Other Communication", sequence: 5, mandatory: false },
  ]);

  const [formData, setFormData] = useState({ name: "", description: "", sequence: "", mandatory: false });

  // Handle Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setMethods([...methods, { ...formData, id: Date.now() }]);
    setFormData({ name: "", description: "", sequence: "", mandatory: false });
  };

  return (
    <div className="admin-container">
      <h2>Communication Methods</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Method Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="number" name="sequence" placeholder="Sequence" value={formData.sequence} onChange={handleChange} />
        <label>
          Mandatory:
          <input type="checkbox" name="mandatory" checked={formData.mandatory} onChange={handleChange} />
        </label>
        <button type="submit">Add Method</button>
      </form>
      <h3>Method List</h3>
      <ul>
        {methods.map((method) => (
          <li key={method.id}>
            {method.name} - {method.description} - Sequence: {method.sequence} - Mandatory: {method.mandatory ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MethodManagement;
