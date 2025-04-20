import { Link } from "react-router-dom";

const CoffeeCard = ({ img, title, text, link }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={link} className="btn btn-primary">Learn More</Link>
      </div>
    </div>
  );
};

export default CoffeeCard;