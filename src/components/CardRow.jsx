import Card from './Card';
import './CardRow.css';


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
