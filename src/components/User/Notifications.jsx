import React from "react";

const Notifications = ({ overdue, dueToday }) => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <div>
        <h4>Overdue Communications</h4>
        <ul>
          {overdue.map((company) => (
            <li key={company.id}>{company.name} - {company.status}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Today’s Communications</h4>
        <ul>
          {dueToday.map((company) => (
            <li key={company.id}>{company.name} - {company.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
