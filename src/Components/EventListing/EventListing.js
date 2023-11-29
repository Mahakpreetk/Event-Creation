import React from "react";
import "./EventListing.css";
import { useNavigate } from "react-router-dom";
import { fetchEventsAPI } from "../../Services/MockAPI";

const EventListing = ({ events }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="event-list">
      <h2>Event Listing</h2>
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <div className="event-info">
            <div className="date-day">
              <p>
                <strong>Date:</strong> {event.startDate}
              </p>
             
            </div>
            <div className="main-info">
              <div className="event-title">
                <h3 style={{ color: "#FF5733", fontSize: "30px", fontWeight: "bolder" }}>
                  {event.title}
                </h3>
                <p style={{ fontSize: "18px", fontWeight:"bold" }}>{event.description}</p>
                <p> {event.locationValue}</p>
                <p><span style={{ color: "#888" }}>{event.endDate}</span></p>
                <div>
            <button style={{ fontSize: '12px' }}>Invited</button>
            <span style={{ marginLeft: '8px' }}>{"+"+event.capacity}</span>
          </div>
              </div>
            </div>
          </div>
          {event.image && (
            <div className="event-image">
              <img
                src={URL.createObjectURL(event.image)}
                alt="Event"
                style={{ maxWidth: "200px" }}
              />
            </div>
          )}
        </div>
      ))}
      <button onClick={goBack}>Go Back to Event Form</button>
    </div>
  );
};

export default EventListing;
