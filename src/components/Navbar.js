import React, { useState } from 'react';
import '../App.css';

const NAV_ITEMS = [
  { key: 'flights', label: 'Flights', icon: '✈️' },
  { key: 'hotels', label: 'Hotels', icon: '🏨' },
  { key: 'trains', label: 'Trains', icon: '🚆' },
  { key: 'cabs', label: 'Cabs', icon: '🚖' },
  { key: 'bus', label: 'Bus', icon: '🚌' },
  { key: 'holidays', label: 'Holidays', icon: '🌟' },
  { key: 'forex', label: 'Forex', icon: '📞' },
  { key: 'manage', label: 'Manage Booking', icon: '🧳' }
];

function Navbar({ onSelect }) {
  const [active, setActive] = useState('flights');

  const handleClick = (key) => {
    setActive(key);
    if (onSelect) onSelect(key);
  };

  return (
    <nav className="main-navbar">
      {NAV_ITEMS.map(item => (
        <button
          key={item.key}
          className={`navbar-btn${active === item.key ? ' active' : ''}`}
          onClick={() => handleClick(item.key)}
        >
          <span className="navbar-icon">{item.icon}</span>
          <span className="navbar-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
