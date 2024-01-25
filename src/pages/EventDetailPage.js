import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import events from '../mockData';

const EventDetailPage = () => {
  const { id } = useParams();
  const selectedEvent = events.find((event) => event.id === parseInt(id));
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate(); 

  const handleDelete = () => {
    // Implement deletion logic
    const updatedEvents = events.filter((event) => event.id !== parseInt(id));
    console.log('Deleted Event:', selectedEvent);
    console.log('Updated Events:', updatedEvents);
   
    navigate('/'); // Navigate back to the event list
  };

  const handleUpdate = () => {
    
    console.log('Updated Event:', selectedEvent); // Log the updated event
 
    setEditMode(false); 
  };

  return (
    <div  class= "eventFeatures_left">
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
              {}
              <button class = "btn-delete" onClick={handleUpdate}>Update</button>
            </div>
          ) : (
            <div>
              <button  class = "btn-delete" onClick={handleDelete}>Delete</button>
              <button class = "btn-delete" onClick={() => setEditMode(true)}>Edit</button>
            </div>
          )}
        </div>
      ) : (
        <p>Event not found</p>
      )}
      <Link to="/">Back to Event List</Link>
    </div>
  );
};

export default EventDetailPage;