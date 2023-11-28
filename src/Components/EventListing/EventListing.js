import React from 'react';
import './EventListing.css';
import { useNavigate } from 'react-router-dom';
import { fetchEventsAPI } from '../../Services/MockAPI';

const EventListing = ({ events }) => {
    const navigate = useNavigate(); 
    const goBack = () => {
        navigate('/'); // Navigates back to the EventForm page
      };
  return (
    <div className="event-list">
      <h2>Event Listing</h2>
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3>{event.title}</h3>
          <p>
            <strong>Start:</strong> {event.startDate}, {event.startTime}
          </p>
          <p>
            <strong>End:</strong> {event.endDate}, {event.endTime}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Tickets:</strong> {event.tickets}
          </p>
          <p>
            <strong>Capacity:</strong> {event.capacity}
          </p>
          <p>
            <strong>Visibility:</strong> {event.visibility}
          </p>
          {event.image && (
            <img
              src={URL.createObjectURL(event.image)}
              alt="Event"
              style={{ maxWidth: '200px' }}
            />
          )}
        </div>
      ))}
      <button onClick={goBack}>Go Back to Event Form</button>
    </div>
  );
};

export default EventListing;
