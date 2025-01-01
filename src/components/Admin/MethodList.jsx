import React from "react";

const MethodList = ({ methods, deleteMethod, editMethod }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Sequence</th>
          <th>Mandatory</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {methods.map((method) => (
          <tr key={method.id}>
            <td>{method.name}</td>
            <td>{method.description}</td>
            <td>{method.sequence}</td>
            <td>{method.mandatory ? "Yes" : "No"}</td>
            <td>
              <button onClick={() => editMethod(method)}>Edit</button>
              <button onClick={() => deleteMethod(method.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MethodList;
