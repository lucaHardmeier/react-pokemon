import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PokemonCard = ({ pokeUrl }) => {

    const [pokeData, setPokeData] = useState({})

    const getPokemon = async () => {
        const response = await fetch(pokeUrl)
        const data = await response.json()
        setPokeData(data)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pokeData.sprites?.front_default} />
            <Card.Body>
                <Card.Title>{pokeData.id} - {pokeData.name}</Card.Title>
                <Button variant="primary">Atrapar</Button>
            </Card.Body>
        </Card>
    )
}

export default PokemonCard