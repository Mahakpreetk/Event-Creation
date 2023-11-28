import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Change to your server's URL

export const createEventAPI = async (newEvent) => {
  try {
    const response = await axios.post(`${BASE_URL}/events`, newEvent);
    return response.data;
  } catch (error) {
    throw new Error('Error creating event');
  }
};

export const fetchEventsAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching events');
  }
};
