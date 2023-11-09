import { useContext } from "react";
import { PokeContext } from "../context/Pokecontext";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const { pickedPokemon } = useContext(PokeContext);

  if (!pickedPokemon) return <></>;

  return (
    <>
      <Link to={"/"}>{"<-"} Regresar a la Home</Link>
      <h1>{pickedPokemon.name}</h1>
      <div className="poke-container">
        <img src={pickedPokemon.sprites.other["official-artwork"].front_default} alt={pickedPokemon.name} />
        <div className="poke-info">
          <div className="poke-types">
            {pickedPokemon.types.map((typeInfo) => {
              return <p key={typeInfo.slot}>{typeInfo.type.name}</p>;
            })}
          </div>
          <p>Alto: {pickedPokemon.height} pies</p>
          <p>Peso: {pickedPokemon.weight} libras</p>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
