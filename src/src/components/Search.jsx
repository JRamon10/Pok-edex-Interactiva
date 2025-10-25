import React, { useState } from 'react'

export default function Search({ onSearch }) {
  const [q, setQ] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!q.trim()) return
    onSearch(q.trim())
  }

  return (
    <form className="search" onSubmit={submit}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Nombre o ID del Pokémon"
      />
      <button type="submit">Buscar</button>
    </form>
  )
}
