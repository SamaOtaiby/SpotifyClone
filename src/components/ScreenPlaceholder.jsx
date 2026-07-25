import './ScreenPlaceholder.css';

// One component, reused for Search / Your Library / Create Playlist /
// Liked Songs. Instead of building 4 near-identical screens, we build
// this once and just change the "label" prop each time.
export default function ScreenPlaceholder({ label }) {
  return (
    <div className="screen-placeholder">
      <h1>{label}</h1>
    </div>
  );
}
