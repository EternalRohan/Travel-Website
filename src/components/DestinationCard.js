import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function DestinationCard({ name, images, image, description }) {
  // Use the first image from images array if available, otherwise fallback to image prop
  const displayImg = images && images.length > 0 ? images[0] : image;
  return (
    <Link
      to={`/destination/${slugify(name)}`}
      className="destination-card"
      tabIndex={0}
      aria-label={`View details for ${name}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <img src={displayImg} alt={name} />
      <div className="destination-card-content">
        <div className="destination-card-title">{name}</div>
        <div className="destination-card-desc">{description}</div>
      </div>
    </Link>
  );
}

export default DestinationCard;
