import React from 'react';
import './Schedules.css';

const Schedule = () => {
  const scheduleData = [
    { time: '9:00 AM', event: 'Meeting with Maria' },
    { time: '11:00 AM', event: 'Pitch Presentation' },
    { time: '1:00 PM', event: 'Lunch' },
    { time: '3:00 PM', event: 'Project Review' }
  ];

  return (
    <div className="schedule-container">
      <ul className="schedule-list">
        {scheduleData.map((item, index) => (
          <li key={index} className="schedule-item">
            <div className="schedule-time">{item.time}</div>
            <div className="schedule-event">{item.event}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
