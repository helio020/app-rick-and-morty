import "./Cards.css";

function Cards() {
  return (
    <div className="card">
      <h2>Rick Sanchez</h2>
      <img
        className="image"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
      />
    </div>
  );
}

export default Cards;
