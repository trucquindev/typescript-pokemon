import './App.css'
import React, { useEffect } from 'react'
import axios from 'axios'
interface pokemon {
  name: string
  url: string
  sprites: {
    front_default: string
  }
}
interface Pokemons {
  name: string,
  url:string
}
const App: React.FC = () => {
  const [pokemon, setPokemon] = React.useState<pokemon[]>([])
  useEffect(()=>{
    const getPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20?offset=20')
        console.log(response);
        
      } catch (error) {
        console.error(error)
      }
    }
    getPokemon()
  })
  return (
    <div className='App'>
      <div className="container">
        <header className="pokemon-header">
            pokemon
        </header>
      </div>
    </div>
  )
}

export default App
