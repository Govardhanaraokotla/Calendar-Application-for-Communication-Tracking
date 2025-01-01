import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';  // Import Calendar styles
import { useNavigate } from "react-router-dom"; // Import for navigation
import "../../styles/user.css"; // Import styles for calendar

const CalendarView = () => {
  const navigate = useNavigate(); // Navigation hook
  const [date, setDate] = useState(new Date());
  const [communications, setCommunications] = useState([]);
  
  useEffect(() => {
    // Sample communication data
    setCommunications([
      { id: 1, date: new Date('2024-09-10'), type: 'Email', notes: 'Followed up with ABC Corp.' },
      { id: 2, date: new Date('2024-09-12'), type: 'LinkedIn Post', notes: 'Posted a company update' },
      { id: 3, date: new Date('2024-09-15'), type: 'Call', notes: 'Discussed project details with XYZ Ltd.' },
    ]);
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const getCommunicationsForDate = (currentDate) => {
    return communications.filter(communication => 
      communication.date.toDateString() === currentDate.toDateString()
    );
  };

  const communicationsForSelectedDate = getCommunicationsForDate(date);

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Communication Calendar</h2>

      {/* Calendar UI */}
      <Calendar
        onChange={handleDateChange}
        value={date}
      />

      {/* Display Communications for Selected Date */}
      <div className="communications-list">
        <h3>Communications for {date.toDateString()}</h3>
        {communicationsForSelectedDate.length > 0 ? (
          <ul>
            {communicationsForSelectedDate.map((communication) => (
              <li key={communication.id}>
                <strong>{communication.type}</strong>: {communication.notes}
              </li>
            ))}
          </ul>
        ) : (
          <p>No communications for this date.</p>
        )}
      </div>

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/dashboard")} // Navigate to the Dashboard
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default CalendarView;
