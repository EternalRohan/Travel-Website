import React, { useState } from 'react';
import '../App.css';

const deals = [
  {
    title: 'Bali Getaway',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    price: '₹41,000',
    description: '5 nights, flights & hotel included. Limited time offer!',
    details: 'Includes airport transfers, daily breakfast, guided tours to Ubud and Tanah Lot, and a traditional Balinese massage.'
  },
  {
    title: 'Paris Spring Escape',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    price: '₹58,000',
    description: 'Romantic Paris trip, 4 nights with breakfast.',
    details: 'Stay at a 4-star hotel, Seine river cruise, Eiffel Tower tickets, and a Parisian food tour included.'
  },
  {
    title: 'Tokyo Cherry Blossoms',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    price: '₹72,500',
    description: 'Experience Sakura season in Japan, 6 nights.',
    details: '6 nights in Shinjuku, guided cherry blossom walks, Mt. Fuji day trip, and JR Pass included.'
  }
];

function TopDeals() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="top-deals-section">
      <h2>Top Deals</h2>
      <div className="top-deals-list">
        {deals.map((deal, idx) => (
          <div className="deal-card" key={idx}>
            <img src={deal.image} alt={deal.title} />
            <div className="deal-card-content">
              <div className="deal-card-title">{deal.title}</div>
              <div className="deal-card-price">{deal.price}</div>
              <div className="deal-card-desc">{deal.description}</div>
              <button className="deal-details-btn" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                {openIdx === idx ? 'Hide Details' : 'View Details'}
              </button>
              {openIdx === idx && (
                <div className="deal-card-details">{deal.details}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDeals;
