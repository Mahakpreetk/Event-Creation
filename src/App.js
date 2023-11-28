import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventForm from './Components/EventForm/EventForm';
import EventListing from './Components/EventListing/EventListing';
function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventForm addEvent={addEvent} />} />
        <Route path="/events" element={<EventListing events={events} />} />
      </Routes>
    </Router>
  );
}

export default App;
