import React, { useState } from 'react';
import '../App.css';

const OPTIONS = {
  flights: [
    'IndiGo 6E-203', 'Air India AI-101', 'Vistara UK-811', 'SpiceJet SG-123', 'GoFirst G8-456'
  ],
  trains: [
    'Rajdhani Express', 'Shatabdi Express', 'Duronto Express', 'Garib Rath', 'Tejas Express'
  ],
  cabs: [
    'Ola Mini', 'Uber Sedan', 'Meru SUV', 'Local Taxi', 'Luxury Cab'
  ],
  bus: [
    'Volvo AC', 'Sleeper Bus', 'Non-AC Seater', 'Luxury Coach', 'Mini Bus'
  ],
  hotels: [
    'Taj Palace', 'The Oberoi', 'ITC Grand', 'Radisson Blu', 'Budget Inn'
  ],
  holidays: [
    'Goa Beach Holiday', 'Jaipur Heritage Tour', 'Kerala Backwaters', 'Ladakh Adventure', 'Varanasi Spiritual Trip'
  ],
  forex: [
    'USD', 'EUR', 'GBP', 'INR', 'JPY'
  ]
};

const FORMS = {
  flights: [
    { label: 'From', name: 'from', type: 'text' },
    { label: 'To', name: 'to', type: 'text' },
    { label: 'Departure Date', name: 'depart', type: 'date' },
    { label: 'Return Date', name: 'return', type: 'date' },
    { label: 'Passengers', name: 'passengers', type: 'number', min: 1, defaultValue: 1 },
    { label: 'Flight', name: 'flight', type: 'select', options: OPTIONS.flights }
  ],
  hotels: [
    { label: 'Location', name: 'location', type: 'text' },
    { label: 'Check-in', name: 'checkin', type: 'date' },
    { label: 'Check-out', name: 'checkout', type: 'date' },
    { label: 'Guests', name: 'guests', type: 'number', min: 1, defaultValue: 1 },
    { label: 'Hotel', name: 'hotel', type: 'select', options: OPTIONS.hotels }
  ],
  trains: [
    { label: 'From', name: 'from', type: 'text' },
    { label: 'To', name: 'to', type: 'text' },
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'Passengers', name: 'passengers', type: 'number', min: 1, defaultValue: 1 },
    { label: 'Train', name: 'train', type: 'select', options: OPTIONS.trains }
  ],
  cabs: [
    { label: 'Pickup Location', name: 'pickup', type: 'text' },
    { label: 'Drop Location', name: 'drop', type: 'text' },
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'Passengers', name: 'passengers', type: 'number', min: 1, defaultValue: 1 },
    { label: 'Cab Type', name: 'cab', type: 'select', options: OPTIONS.cabs }
  ],
  bus: [
    { label: 'From', name: 'from', type: 'text' },
    { label: 'To', name: 'to', type: 'text' },
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'Passengers', name: 'passengers', type: 'number', min: 1, defaultValue: 1 },
    { label: 'Bus Type', name: 'bus', type: 'select', options: OPTIONS.bus }
  ],
  holidays: [
    { label: 'Destination', name: 'destination', type: 'text' },
    { label: 'Start Date', name: 'start', type: 'date' },
    { label: 'End Date', name: 'end', type: 'date' },
    { label: 'Travelers', name: 'travelers', type: 'number', min: 1, defaultValue: 2 },
    { label: 'Holiday Package', name: 'holiday', type: 'select', options: OPTIONS.holidays }
  ],
  forex: [
    { label: 'Currency', name: 'currency', type: 'select', options: OPTIONS.forex },
    { label: 'Amount', name: 'amount', type: 'number', min: 1, defaultValue: 1000 }
  ],
  manage: [
    { label: 'Booking Reference', name: 'ref', type: 'text' },
    { label: 'Email/Phone', name: 'contact', type: 'text' }
  ]
};

function BookingModal({ open, onClose, type }) {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const fields = FORMS[type] || [];

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <h2 style={{ marginBottom: '1rem' }}>
          {type.charAt(0).toUpperCase() + type.slice(1)} Booking
        </h2>
        {submitted ? (
          <div className="booking-success">
            <div className="booking-success-icon">
              <span role="img" aria-label="check mark">✅</span>
            </div>
            <h3 className="booking-success-title">Booking Confirmed!</h3>
            <div className="booking-success-message">
              Thank you for booking with <span style={{ color: '#1976d2', fontWeight: 600 }}>Rohan Travels</span>.<br />
              We’ve received your request and will send details to your email/phone soon.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="booking-form">
            {fields.map(f => (
              <div key={f.name} className="booking-form-field">
                <label>{f.label}</label>
                {f.type === 'select' ? (
                  <select
                    name={f.name}
                    value={form[f.name] || ''}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select {f.label}</option>
                    {f.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={f.type}
                    name={f.name}
                    value={form[f.name] || f.defaultValue || ''}
                    min={f.min}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            ))}
            <button className="booking-submit-btn" type="submit">Book Now</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default BookingModal;
