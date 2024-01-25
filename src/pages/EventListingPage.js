import React, { useState } from 'react';
import EventList from '../components/EventList';
//import '../styles/EventList.css';
import events from '../mockData';

const EventListingPage = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterLocation, setFilterLocation] = useState('');

  const handleSortChange = () => {
    // Implement sorting logic (toggle between asc and desc)
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleFilterChange = (e) => {
    // Implement filtering logic based on location
    setFilterLocation(e.target.value);
  };

  return (
    <div class="top-container" >
      <h1>University Events</h1>
      <div>
        <label>
          Sort Order:
          <button class="btn-delete" onClick={handleSortChange}>Toggle</button>
        </label>
        <label>
          Filter by Location:
          <input class="btn-delete" type="text" value={filterLocation} onChange={handleFilterChange} />
        </label>
      </div>
      <EventList sortOrder={sortOrder} filterLocation={filterLocation} />
      <div class="creating-event">
            <h2>Please tab to create event</h2>
          <a class="btn" href="/create-event">Create Event</a>
        </div>
    </div>
  );
};

export default EventListingPage