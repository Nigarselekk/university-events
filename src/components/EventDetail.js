import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import events from '../mockData';

const EventDetail = () => {
  const { id } = useParams();
  const selectedEvent = events.find((event) => event.id === parseInt(id));
  const [editMode, setEditMode] = useState(false);

  const handleDelete = () => {
    // Implement deletion logic
    setEditMode(false);
  };

  const handleUpdate = () => {
    // Implement update logic
    setEditMode(false);
  };

  return (
    <div>
      <h2>Event Detail</h2>
      {selectedEvent ? (
        <div>
          <p>
            <strong>Name:</strong> {selectedEvent.name}
          </p>
          <p>
            <strong>Date:</strong> {selectedEvent.date}
          </p>
          <p>
            <strong>Location:</strong> {selectedEvent.location}
          </p>
          <p>
            <strong>Description:</strong> {selectedEvent.description}
          </p>
          <p>
            <strong>Organizer:</strong> {selectedEvent.organizer}
          </p>
          {editMode ? (
            <div>
              {/* Add form fields for editing */}
              <button onClick={handleUpdate}>Update</button>
            </div>
          ) : (
            <div>
              <button onClick={handleDelete}>Delete</button>
              <button onClick={() => setEditMode(true)}>Edit</button>
            </div>
          )}
        </div>
      ) : (
        <p>Event not found</p>
      )}
    </div>
  );
};

export default EventDetail;