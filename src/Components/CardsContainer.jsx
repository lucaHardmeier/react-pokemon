import { useState } from "react";
import { useEffect } from "react";
import CustomCard from "./CustomCard";
import Paginator from "./Paginator";

const CardsContainer = ({ query, search, amount }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pages, setPages] = useState(1);

  const getPokemons = async () => {
    try {
      const res = await fetch(query);
      const data = await res.json();
      const { count, results } = data;
      setPokemons(results);
      setPages(Math.round(count / amount));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [query]);

  console.log("pokemons", pokemons);
  const filteredSearch = pokemons.filter((pokemon) => pokemon.name.includes(search));

  return (
    <>
      <div className="cards-container">
        {filteredSearch.map(({ name, url }) => (
          <CustomCard name={name} url={url} key={url} />
        ))}
      </div>
      <Paginator pages={pages} />
    </>
  );
};

export default CardsContainer;
