import { useEffect, useState } from "react"
import PokeBrowser from "./PokeBrowser.jsx"
import PokemonCard from "./PokemonCard.jsx"

const PokemonsContainer = () => {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")

  const pokeRequest = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    )
    const data = await response.json()
    setPokemons(data.results)
  }

  console.log(pokemons)
  useEffect(() => {
    pokeRequest()
  }, [])

  return (
    <>
      <PokeBrowser setSearch={setSearch} />
      <div className="d-flex flex-wrap">
        {pokemons
          .filter((pokemon) => pokemon.name.includes(search))
          .map((pokemon) => (
            <PokemonCard key={pokemon.name} pokeUrl={pokemon.url} />
          ))}
      </div>
    </>
  )
}

export default PokemonsContainer
