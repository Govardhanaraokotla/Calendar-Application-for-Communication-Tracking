import React, { useState } from "react";

const CommunicationModal = ({ onSubmit, onClose, company }) => {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (type && date) {
      onSubmit(company.id, { type, date, notes });
      onClose();
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="modal">
      <h3>Log Communication - {company.name}</h3>
      <label>Type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="LinkedIn Post">LinkedIn Post</option>
        <option value="Email">Email</option>
        <option value="Phone Call">Phone Call</option>
      </select>
      <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label>Notes:</label>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CommunicationModal;
