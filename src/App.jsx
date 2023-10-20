import { useEffect, useState } from "react"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [amount, setAmount] = useState("20")
  const [page, setPage] = useState("1")
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")

  const getPokemons = async () => {
    try {
      const res = await fetch(query)
      const data = await res.json()
      setPokemons(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemons()
  }, [query])

  const handleClick = () => {
    const offset = (page - 1) * amount
    setQuery(
      `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=${offset}`
    )
  }

  const filteredSearch = pokemons.filter((pokemon) =>
    pokemon.name.includes(search)
  )

  return (
    <>
      <div>
        <label htmlFor="search">Buscar por nombre:</label>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="poke-amount">¿Cuántos pokemones desea ver?</label>
        <input
          type="text"
          name="poke-amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="page">Número de página</label>
        <input
          type="text"
          name="page"
          onChange={(e) => setPage(e.target.value)}
        />
        <button onClick={handleClick}>Mostrar Pokemones</button>
      </div>
      <ul>
        {filteredSearch.map(({ name, url }) => (
          <li key={url}>{name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
