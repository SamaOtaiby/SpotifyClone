import Card from './Card';
import './CardRow.css';

// A "row" is just a title + "Show all" + a grid of Cards.
// We pass it an array of playlist objects and it does the mapping -
// this is the reusable pattern that lets one component render both
// the "Focus" row and the "Spotify Playlists" row from content.js.
export default function CardRow({ title, items }) {
  return (
    <section className="card-row">
      <div className="card-row-header">
        <h2>{title}</h2>
        <span className="show-all">Show all</span>
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
