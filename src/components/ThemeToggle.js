import React from 'react';
import '../App.css';

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className={`theme-toggle-btn${theme === 'dark' ? ' dark' : ''}`}
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <span role="img" aria-label="Light Mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark Mode">🌙</span>
      )}
    </button>
  );
}

export default ThemeToggle;
