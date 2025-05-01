import React from 'react';
import '../App.css';

function DestinationModal({ destination, onClose }) {
  const { name, image, details } = destination;
  return (
    <div className="destination-modal-overlay" onClick={onClose}>
      <div className="destination-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">&times;</button>
        <img src={image} alt={name} className="modal-image" />
        <h2 className="modal-title">{name}</h2>
        <div className="modal-details">
          <div><strong>Lodging:</strong> {details.lodging}</div>
          <div><strong>Popular Attractions:</strong> {details.attractions}</div>
          <div><strong>What to Do:</strong> {details.todo}</div>
          <div><strong>Popular Restaurants:</strong> {details.restaurants}</div>
          <div><strong>Popular Activities:</strong> {details.activities}</div>
          <div><strong>Safety:</strong> {details.safety}</div>
          <div><strong>Local Commuting:</strong> {details.commuting}</div>
        </div>
      </div>
    </div>
  );
}

export default DestinationModal;
