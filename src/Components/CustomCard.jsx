import { useState, useContext, useEffect } from "react";

import Card from "react-bootstrap/Card";
import { PokeContext } from "../context/Pokecontext";
import { useNavigate } from "react-router-dom";

const CustomCard = ({ name, url }) => {
  const [pokemon, setPokemon] = useState([]);

  const { setPickedPokemon } = useContext(PokeContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
  }, [url]);

  const handleClick = () => {
    console.log(`La url de ${name} es ${url}`);
    setPickedPokemon(pokemon);
    navigate("/pokemon");
  };

  if (pokemon.length === 0) return;

  return (
    <Card style={{ width: "18rem" }} onClick={handleClick}>
      <Card.Img variant="top" src={pokemon.sprites.other["official-artwork"].front_default} />
      <Card.Body>
        <Card.Title>
          {pokemon.id} - {pokemon.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
