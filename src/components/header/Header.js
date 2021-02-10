/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import {
  greeting,
  skillsSection,
  blogSection,
} from '../../portfolio';

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewSkills = skillsSection.display;
  const viewBlog = blogSection.display;

  return (
    <Headroom>
      <header className={isDark ? 'dark-menu header' : 'header'}>
        <a href='#home' className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span className={isDark ? 'navicon navicon-dark' : 'navicon'}></span>
        </label>
        <ul className={isDark ? 'dark-menu menu' : 'menu'}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          
          <li>
            <a href="#contact">Contact Me</a>
          </li>
  
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
