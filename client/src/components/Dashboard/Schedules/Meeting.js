const Meeting = ({ meeting, onDelete, onArchive }) => {
  const { id, date, time, description, archived } = meeting;

  return (
    <div className={`schedule-item ${archived ? 'archived' : ''}`}>
      <div className="schedule-event">
        <p className="schedule-time">Date: {date}</p>
        <p className="schedule-time">Time: {time}</p>
        <p className={`description ${archived ? 'archived-text' : ''}`}>
          Description: {description}
        </p>
      </div>
      <div>
        <button className="delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Meeting;
