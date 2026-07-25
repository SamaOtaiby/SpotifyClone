import CardRow from './CardRow';
import { focusPlaylists, spotifyPlaylists } from '../data/content';

export default function Home() {
  return (
    <div className="home-content">
      <CardRow title="Focus" items={focusPlaylists} />
      <CardRow title="Spotify Playlists" items={spotifyPlaylists} />
    </div>
  );
}
