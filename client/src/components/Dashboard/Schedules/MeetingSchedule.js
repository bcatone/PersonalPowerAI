// MeetingSchedule.js
import React, { useState } from 'react';
import Meeting from './Meeting';
import './MeetingSchedule.css'; // Import the styles

const MeetingSchedule = () => {
  const [meetings, setMeetings] = useState([]);
  const [newMeeting, setNewMeeting] = useState({
    id: 0,
    date: '',
    time: '',
    description: '',
    archived: false
  });

  const addMeeting = () => {
    const currentTime = new Date();
    const meetingTime = new Date(`${newMeeting.date}T${newMeeting.time}`);
    const isMeetingPast = meetingTime < currentTime;

    setMeetings([
      ...meetings,
      {
        ...newMeeting,
        id: Date.now(),
        archived: isMeetingPast
      }
    ]);

    setNewMeeting({
      id: 0,
      date: '',
      time: '',
      description: '',
      archived: false
    });
  };

  const deleteMeeting = id => {
    const updatedMeetings = meetings.filter(meeting => meeting.id !== id);
    setMeetings(updatedMeetings);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewMeeting({ ...newMeeting, [name]: value });
  };

  return (
    <div className="schedule-container">
      <div className="schedule-list">
        {meetings.map(meeting => (
          <Meeting key={meeting.id} meeting={meeting} onDelete={deleteMeeting} />
        ))}
      </div>
      <div>
        <h2 className="h2">Add Meeting</h2>
        <form className="schedule__form">
          <div className="date__container">
            <label className="text date__text">Date:</label>
            <input
              className="date__input"
              type="date"
              name="date"
              value={newMeeting.date}
              onChange={handleInputChange}
            />
            <label className="text">Time:</label>
            <input
              className="date__input"
              type="time"
              name="time"
              value={newMeeting.time}
              onChange={handleInputChange}
            />
          </div>
          <label className="text">Description:</label>
          <input
            type="text"
            name="description"
            value={newMeeting.description}
            onChange={handleInputChange}
          />
          <button type="button" className="add-button" onClick={addMeeting}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default MeetingSchedule;
