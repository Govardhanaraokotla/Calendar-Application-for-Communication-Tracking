import React from 'react';
import Calendar from 'react-calendar';

const CalendarScheduleView = ({ communications }) => {
  return (
    <Calendar
      tileContent={({ date }) => {
        const event = communications.find(c => new Date(c.date).toDateString() === date.toDateString());
        return event ? <p>{event.type}</p> : null;
      }}
    />
  );
};

export default CalendarScheduleView;