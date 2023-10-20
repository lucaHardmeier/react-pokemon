import { useState } from 'react'

const AddPokemon = ({ pokemonsData, setPokemonsData }) => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [img, setImg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const pokemon = { name, number: +number, img }
        setPokemonsData([...pokemonsData, pokemon])
        setName("")
        setNumber("")
        setImg("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Nombre' aria-label='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="number">Número:</label>
            <input type="text" name='number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <label htmlFor="img">Imágen (URL)</label>
            <input type="text" name='img' value={img} onChange={(e) => setImg(e.target.value)} />
            <button type='submit'>Agregar</button>
        </form>
    )
}

export default AddPokemon