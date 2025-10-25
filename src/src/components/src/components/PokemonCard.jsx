import React from 'react'
import StatsDetail from './StatsDetail'

export default function PokemonCard({ data }) {
  const { id, name, sprites, height, weight, types, stats } = data

  return (
    <article className="card">
      <header className="card-header">
        <div className="card-id">#{id}</div>
        <h2 className="card-name">{name}</h2>
      </header>

      <div className="card-body">
        <div className="image-wrap">
          <img src={sprites?.front_default} alt={name} />
        </div>

        <div className="info">
          <p><strong>Altura:</strong> {height} dm</p>
          <p><strong>Peso:</strong> {weight} hg</p>

          <div className="types">
            <strong>Tipos:</strong>
            <ul>
              {types.map((t) => (
                <li key={t.type.name}>{t.type.name}</li>
              ))}
            </ul>
          </div>

          <div className="stats-section">
            <strong>Estadísticas base</strong>
            <StatsDetail stats={stats.slice(0, 5)} />
          </div>
        </div>
      </div>
    </article>
  )
}
