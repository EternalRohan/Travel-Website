import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const tabList = [
  { key: 'things', label: 'Things to Do' },
  { key: 'famous', label: 'Famous Places' },
  { key: 'besttime', label: 'Best Time To Visit' },
  { key: 'book', label: 'Book Your Trip' },
  { key: 'travel', label: 'Travel / Stay' }
];

function DestinationDetail({ destinations }) {
  const { destinationSlug } = useParams();
  const destination = destinations.find((d) => slugify(d.name) === destinationSlug || d.slug === destinationSlug);
  const [tab, setTab] = useState('things');
  if (!destination) {
    return (
      <div className="App" style={{padding: '2rem', textAlign: 'center'}}>
        <h2>Destination Not Found</h2>
        <Link to="/" className="footer-link">Back to Home</Link>
      </div>
    );
  }
  const { name, images = [], description, details = {}, thingsToDo = [], famousPlaces = [], bestTime = [], booking = [] } = destination;
  return (
    <div className="destination-detail-page">
      <div className="hero-section" style={{backgroundImage: `url('${images[0]}')`}}>
        <div className="hero-overlay">
          <div className="hero-main">
            <div className="hero-info">
              <h1 className="hero-title">{name}</h1>
              <div className="hero-desc">{description}</div>
            </div>
            <div className="hero-gallery">
              <img src={images[0]} alt={name} className="hero-main-img" />
              <div className="hero-thumbs">
                {images.map((img, idx) => (
                  <img key={idx} src={img} alt={name + ' thumb'} className="hero-thumb" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="detail-tabs">
        {tabList.map(t => (
          <button
            key={t.key}
            className={tab === t.key ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <div className="tab-content">
        {tab === 'things' && (
          <section>
            <h3 className="tab-section-title">Things to See & Do</h3>
            <div className="things-grid">
              {thingsToDo.map((thing, idx) => (
                <div className="thing-card" key={idx}>
                  <img src={thing.image} alt={thing.title} className="thing-img" />
                  <div className="thing-info">
                    <div className="thing-title">{thing.title}</div>
                    <div className="thing-desc">{thing.description}</div>
                    <div className="thing-distance">{thing.distance}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {tab === 'famous' && (
          <section>
            <h3 className="tab-section-title">Famous Places</h3>
            <div className="things-grid">
              {famousPlaces.length === 0 ? (
                <div style={{padding:'2rem',width:'100%',textAlign:'center',color:'#888'}}>No famous places listed.</div>
              ) : famousPlaces.map((place, idx) => (
                <div className="thing-card" key={idx}>
                  <img src={place.image} alt={place.title} className="thing-img" />
                  <div className="thing-info">
                    <div className="thing-title">{place.title}</div>
                    <div className="thing-desc">{place.description}</div>
                    <div className="thing-distance">{place.distance}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {tab === 'besttime' && (
          <section>
            <h3 className="tab-section-title">Best Time to Visit</h3>
            <div className="besttime-list">
              {bestTime.map((bt, idx) => (
                <div className="besttime-card" key={idx}>
                  <div className="besttime-month">{bt.month}</div>
                  <div className="besttime-note">{bt.note}</div>
                </div>
              ))}
            </div>
          </section>
        )}
        {tab === 'book' && (
          <section>
            <h3 className="tab-section-title">Book Your Trip</h3>
            <div className="booking-list">
              {booking.map((b, idx) => (
                <a key={idx} href={b.link} className="booking-card" target="_blank" rel="noopener noreferrer">
                  <div className="booking-type">{b.type}</div>
                  <div className="booking-name">{b.name}</div>
                  {b.price && <div className="booking-price">₹ {b.price}</div>}
                </a>
              ))}
            </div>
          </section>
        )}
        {tab === 'travel' && (
          <section>
            <h3 className="tab-section-title">Travel, Stay & More</h3>
            <div className="travel-details">
              <div><strong>Lodging:</strong> {details.lodging}</div>
              <div><strong>Popular Attractions:</strong> {details.attractions}</div>
              <div><strong>What to Do:</strong> {details.todo}</div>
              <div><strong>Popular Restaurants:</strong> {details.restaurants}</div>
              <div><strong>Popular Activities:</strong> {details.activities}</div>
              <div><strong>Safety:</strong> {details.safety}</div>
              <div><strong>Local Commuting:</strong> {details.commuting}</div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default DestinationDetail;
