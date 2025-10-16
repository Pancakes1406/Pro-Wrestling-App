import React, { useEffect, useState } from 'react';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map(e => (
          <li key={e.id}>
            {e.name} - {e.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;