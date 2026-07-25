import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './components/Home';
import ScreenPlaceholder from './components/ScreenPlaceholder';
import './App.css';

// This object maps a tab id to what its label should say when it's
// NOT the Home tab (Home renders real content instead of a label).
const screenLabels = {
  search: 'Search',
  library: 'Your Library',
  'create-playlist': 'Create Playlist',
  'liked-songs': 'Liked Songs',
};

export default function App() {
  // activeScreen is the ONE piece of state that drives the whole app.
  // 'home' is the default screen when the app first loads.
  const [activeScreen, setActiveScreen] = useState('home');

  // Decide what goes in the main content area based on activeScreen.
  // This is "conditional rendering": different JSX depending on state.
  function renderScreen() {
    if (activeScreen === 'home') {
      return <Home />;
    }
    return <ScreenPlaceholder label={screenLabels[activeScreen]} />;
  }

  return (
    <div className="app">
      <Sidebar activeScreen={activeScreen} onNavigate={setActiveScreen} />
      <div className="main-panel">
        <TopBar />
        <main className="main-content">{renderScreen()}</main>
      </div>
    </div>
  );
}
