import { useState } from "react";

const Form = ({ setQuery, setSearch, setAmount, amount }) => {
  const [page, setPage] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    const offset = (page - 1) * amount;
    setQuery(`https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=${offset}`);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <label htmlFor="search">Buscar por nombre:</label>
      <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} />
      <label htmlFor="poke-amount">¿Cuántos pokemones desea ver?</label>
      <input type="text" name="poke-amount" onChange={(e) => setAmount(e.target.value)} />
      <label htmlFor="page">Número de página</label>
      <input type="text" name="page" onChange={(e) => setPage(e.target.value)} />
      <button type="submit">Mostrar Pokemones</button>
    </form>
  );
};

export default Form;
