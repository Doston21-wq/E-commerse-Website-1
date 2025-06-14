import React from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useGlobalContext } from '../context';
import '../index.css'; 
const ThemeToggle = () => {
  const { isDarkTheme, ToggleTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={ToggleTheme}>
        {isDarkTheme ? (
          <BsMoonFill className="toggle-icon icon-btn toggle" />
        ) : (
          <BsSunFill className="toggle-icon icon-btn toggle" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
