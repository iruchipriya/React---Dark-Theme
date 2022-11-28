import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [checked, setChecked] = useState(
    localStorage.getItem('checked') || false
  );
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = (e) => {
    setChecked(e.target.checked);
    console.log(checked, 'checked');
    !checked ? setTheme('dark') : setTheme('light');
  };

  //useEffect hook to update the className of the document.body element based on the theme state variable. This allows you to dynamically update the CSS of the application based on the theme.
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('checked', checked);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <h1>Light & Dark Mode</h1>

      <div>
        Dark Mode:
        <input type="checkbox" onChange={toggleTheme} checked={checked} />
      </div>
      <div> Dark mode for the entire page</div>
    </div>
  );
}
