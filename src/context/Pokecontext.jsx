import { useState, createContext } from "react";

export const PokeContext = createContext({});

export const PokeProvider = ({ children }) => {
  const [pickedPokemon, setPickedPokemon] = useState();

  return <PokeContext.Provider value={{ pickedPokemon, setPickedPokemon }}>{children}</PokeContext.Provider>;
};
