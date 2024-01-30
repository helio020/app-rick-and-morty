import "./App.css";
import Card from "./components/Card/Card";

const item1 = {
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  status: "Vivo",
  species: "Humana",
  origin: "Terra (C-137)",
};

const item2 = {
  name: "Morty Smith",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  status: "Vivo",
  species: "Humana",
  origin: "Desconhecido",
};

const item3 = {
  name: "Summer Smith",
  image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  status: "Vivo",
  species: "Humana",
  origin: "Terra (Dimensão de Substituição)",
};

const itens = [item1, item2, item3];

function App() {
  return (
    <>
      <div className="cards">
        {itens.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
