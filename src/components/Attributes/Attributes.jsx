/* eslint-disable react/prop-types */
import "./Attributes.css";

function Attributes(props) {
  const item = props.item;
  return (
    <div className="card__attributes">
      <div className="card__attributes__status">
        <span>Status: {item.status}</span>
      </div>
      <div className="card__attributes__specie">
        <span>Espécie: {item.species}</span>
      </div>
      <div className="card__attributes__origin">
        <span>Origem: {item.origin}</span>
      </div>
    </div>
  );
}

export default Attributes;
