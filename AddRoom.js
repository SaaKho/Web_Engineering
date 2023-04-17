import React, { useState } from 'react';
import './AddRoom.css';

export default function AddRoom() {
  const [roomDetails, setRoomDetails] = useState({
    roomType: '',
    numberOfBeds: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setRoomDetails({
      ...roomDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform room addition logic here
    console.log(roomDetails);
  };

  return (
    <div className="add-room-container">
      <h1>Add Room</h1>
      <form onSubmit={handleSubmit} className="add-room-form">
        <div className="card">
          <label htmlFor="roomType">Room Type</label>
          <input
            type="text"
            id="roomType"
            name="roomType"
            value={roomDetails.roomType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="card">
          <label htmlFor="numberOfBeds">Number of Beds</label>
          <input
            type="number"
            id="numberOfBeds"
            name="numberOfBeds"
            value={roomDetails.numberOfBeds}
            onChange={handleChange}
            required
          />
        </div>
        <div className="card">
          <label htmlFor="price">Price per Night ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={roomDetails.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="card">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={roomDetails.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add Room
        </button>
      </form>
    </div>
  );
}