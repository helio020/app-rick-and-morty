/* eslint-disable react/prop-types */
import Attributes from "../Attributes/Attributes";
import "./Card.css";

function Card(props) {
  const item = props.item;
  return (
    <div className="card">
      <h2 className="card__name">{item.name}</h2>
      <Attributes item={item} />
      <img className="card__image" src={item.image} alt={item.name} />
    </div>
  );
}

export default Card;
