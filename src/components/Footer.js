import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about" className="footer-link">About Us</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>
      {/* Newsletter and subscribe button removed */}
      <div style={{marginTop: '1.2rem', fontSize: '0.97rem', color: '#1976d2'}}> 2025 Rohan Travels. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
