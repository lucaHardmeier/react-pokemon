import { useState } from "react";
import { useEffect } from "react";

import Card from "react-bootstrap/Card";

const CustomCard = ({ name, url }) => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [url]);

  if (pokemon.length === 0) return;

  return (
    <Card style={{ width: "18rem" }}>
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
