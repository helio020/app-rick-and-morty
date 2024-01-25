import Attributes from "../Attributes/Attributes";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <h2 className="card__name">Rick Sanchez</h2>
      <Attributes />
      <img
        className="card__image"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
      />
    </div>
  );
}

export default Card;
