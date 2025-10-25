import React from 'react'

export default function StatsDetail({ stats = [] }) {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.stat.name} className="stat-item">
          <div className="stat-name">{s.stat.name}</div>
          <div className="stat-bar">
            <div
              className="stat-fill"
              style={{ width: Math.min(s.base_stat, 100) + '%' }}
            />
          </div>
          <div className="stat-value">{s.base_stat}</div>
        </div>
      ))}
    </div>
  )
}
