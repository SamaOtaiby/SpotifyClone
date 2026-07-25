import './Card.css';


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
