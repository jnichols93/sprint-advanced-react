import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode.js";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
     <div>
         <h1>WORLD CUP CHAMPS</h1>
     </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;