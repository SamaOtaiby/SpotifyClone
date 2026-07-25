import Icon from './Icon';
import { navItems, libraryActions } from '../data/content';
import './Sidebar.css';

// "activeScreen" and "onNavigate" are PROPS passed down from App.jsx.
// Sidebar itself holds no state - it just displays what it's told to,
// and reports clicks back up to the parent. This is the standard React
// pattern: state lives in one place (App), children are "controlled".
export default function Sidebar({ activeScreen, onNavigate }) {
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
              <button
                className={`sidebar-link ${activeScreen === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="sidebar-nav sidebar-library">
        <ul>
          {libraryActions.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar-link ${activeScreen === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="icon-badge">
                  <Icon name={item.icon} size={14} />
                </span>
                <span>{item.label}</span>
              </button>
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
