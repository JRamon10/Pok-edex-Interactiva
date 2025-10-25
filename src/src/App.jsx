import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import PokemonCard from './components/PokemonCard'

export default function App() {
  const [term, setTerm] = useState('')
  const [pokemonData, setPokemonData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!term) return

    const controller = new AbortController()

    async function fetchPokemon() {
      setIsLoading(true)
      setError(null)
      setPokemonData(null)

      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`, { signal: controller.signal })
        setPokemonData(res.data)
      } catch (err) {
        if (axios.isCancel(err)) return
        setError('Pokémon no encontrado o error en la API')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemon()

    return () => controller.abort()
  }, [term])

  return (
    <div className="app">
      <header>
        <h1>Pokédex Interactiva</h1>
        <p className="subtitle">Busca por nombre o ID (ej. pikachu o 25)</p>
      </header>

      <main>
        <Search onSearch={(q) => setTerm(q)} />

        {isLoading && <div className="status">Cargando...</div>}
        {error && <div className="status error">{error}</div>}
        {pokemonData && !isLoading && !error && (
          <PokemonCard data={pokemonData} />
        )}
      </main>

      <footer>
        <small>Proyecto: Pokédex Interactiva — Entrega: 25 Oct 2025</small>
      </footer>
    </div>
  )
}
