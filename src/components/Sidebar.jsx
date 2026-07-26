import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import { navItems, libraryActions } from '../data/content';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <Icon name="logo" size={32} />
        <span>Spotify</span>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="sidebar-nav sidebar-library">
        <ul>
          {libraryActions.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                <span className="icon-badge">
                  <Icon name={item.icon} size={14} />
                </span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="footer-links">
          <span>Legal</span>
          <span>Privacy Center</span>
          <span>Privacy Policy</span>
        </div>
        <div className="footer-links">
          <span>Cookies</span>
          <span>About</span>
          <span>Ads</span>
        </div>
        <button className="lang-button">🌐 English</button>
      </div>

    </aside>
  );
}