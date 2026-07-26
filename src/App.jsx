import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './components/Home';
import ScreenPlaceholder from './components/ScreenPlaceholder';
import NotFound from './components/NotFound';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="main-panel">
          <TopBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<ScreenPlaceholder label="Search" />} />
              <Route path="/library" element={<ScreenPlaceholder label="Your Library" />} />
              <Route path="/create-playlist" element={<ScreenPlaceholder label="Create Playlist" />} />
              <Route path="/liked-songs" element={<ScreenPlaceholder label="Liked Songs" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}