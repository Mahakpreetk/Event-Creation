import React, { useState } from 'react';
import './EventForm.css';
import { useNavigate } from 'react-router-dom';
import { createEventAPI } from '../../Services/MockAPI';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [tickets, setTickets] = useState('');
  const [capacity, setCapacity] = useState('');
  const [visibility, setVisibility] = useState('');
  const [image, setImage] = useState(null); // For event picture
  const [locationType, setLocationType] = useState('');
const [locationValue, setLocationValue] = useState('');
const [eventType, setEventType] = useState('');


const handleLocationChange = (type) => {
  setLocationType(type);
  if (type === 'Physical') {
    setLocationValue('');
  } else if (type === 'Online') {
    setLocationValue('');
  }
};
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      startDate,
      startTime,
      endDate,
      endTime,
      location,
      tickets,
      capacity,
      visibility,
      image, // You can process the image here (store in state, upload to server, etc.)
    };
    addEvent(newEvent);
    // Reset form fields
    setTitle('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
    setLocation('');
    setTickets('');
    setCapacity('');
    setVisibility('');
    setImage(null);
    navigate('/events');
  };
  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    setImage(uploadedImage);
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        className='placeholder-header'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
       <div className="date-container">
      <div className="date-input">
        <label htmlFor="startDate"><strong>Start:</strong></label>
        <input
          type="datetime-local"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
    </div>
    <div className="date-container">
      <div className="date-input">
        <label htmlFor="endDate"><strong>End:</strong></label>
        <input
          type="datetime-local"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      </div>
      <div className="description-container">
      <label htmlFor="description"><strong>Event Description:</strong></label>
      <textarea
        id="description"
        placeholder="Add a short teaser or description for the event..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
    <div className="location-container">
      <label><strong>Event Location:</strong></label>
      <div className="location-options">
        <label className={`location-option ${locationType === 'Physical' && 'selected'}`}>
          <input
            type="radio"
            value="Physical"
            checked={locationType === 'Physical'}
            onChange={() => handleLocationChange('Physical')}
          />
          Physical
        </label>
        <label className={`location-option ${locationType === 'Online' && 'selected'}`}>
          <input
            type="radio"
            value="Online"
            checked={locationType === 'Online'}
            onChange={() => handleLocationChange('Online')}
          />
          Online
        </label>
      </div>
      <div className="location-input">
        <input
          type="text"
          placeholder={locationType === 'Physical' ? 'Add an address or venue name...' : 'eg: Virtual Event, Conference'}
          value={locationValue}
          onChange={(e) => setLocationValue(e.target.value)}
          readOnly={locationType === 'Online'}
        />
      </div>
    </div>
    <div className="image-upload">
        <label htmlFor="file-upload" className="upload-label">
          Upload Event Image
          <input id="file-upload" type="file" onChange={handleImageUpload} />
        </label>
        {/* Display the uploaded image */}
        {image && (
          <div className="image-preview">
            <img src={URL.createObjectURL(image)} alt="Event" />
          </div>
        )}
      </div>
      {/*<input
        type="text"
        placeholder="Number of Tickets"
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
      />
      <input
        type="text"
        placeholder="Capacity"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
      />
      <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
        <option value="">Select Visibility</option>
        <option value="public">Public</option>
        <option value="private">Private</option>
        </select>*/}
      
      <button type="submit">Create Event</button>
      <div className="event-options">
  <h2>Event Options</h2>
  <div className="option">
  <label htmlFor="eventType">Event Type:</label>
  <div className="event-type-options">
      <label>
        <input
          type="radio"
          value="Ticketed Event"
          checked={eventType === 'Ticketed Event'}
          onChange={() => setEventType('Ticketed Event')}
        />
        Ticketed Event
      </label>
      <label>
        <input
          type="radio"
          value="RSVP Event"
          checked={eventType === 'RSVP Event'}
          onChange={() => setEventType('RSVP Event')}
        />
        RSVP Event
      </label>
    </div>
  </div>
  <div className="option">
    <label htmlFor="capacity">Capacity:</label>
    <input
      type="text"
      id="capacity"
      placeholder="Capacity"
      value={capacity}
      onChange={(e) => setCapacity(e.target.value)}
    />
  </div>
  <div className="option">
    <label htmlFor="visibility">Visibility:</label>
    <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
      <option value="">Select Visibility</option>
      <option value="public">Public</option>
      <option value="private">Private</option>
    </select>
  </div>
</div>
    </form>
  );
};

export default EventForm;
