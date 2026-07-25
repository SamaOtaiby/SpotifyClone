import './Card.css';

// This is the whole idea of "reusability": Card doesn't know about
// Spotify, playlists, or focus music. It just takes an image, a title,
// and a description as props and renders them. We reuse the exact same
// component for every single card on the page.
export default function Card({ image, title, description }) {
  return (
    <div className="card">
      <div className="card-image-wrap">
        <img src={image} alt={title} className="card-image" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
