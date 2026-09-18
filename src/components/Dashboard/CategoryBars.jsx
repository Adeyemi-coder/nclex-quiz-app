import React from 'react';

export default function CategoryBars({ categories }) {
  if (!categories || categories.length === 0) {
    return (
      <div style={{ color: 'var(--muted-platinum)', padding: '1rem', textAlign: 'center' }}>
        No category data available yet.
      </div>
    );
  }

  return (
    <div className="category-bars-container">
      {categories.map(cat => {
        const isWeak = cat.accuracy < 60;

        return (
          <div key={cat.name} className={`category-bar-row ${isWeak ? 'weak-focus' : ''}`}>
            <div className="cat-bar-header">
              <div className="cat-name-box">
                <span className="cat-title">{cat.name}</span>
                <span className="cat-fraction">({cat.correct}/{cat.total})</span>
                {isWeak && <span className="focus-chip">Focus Area</span>}
              </div>
              <span className="cat-percentage">{cat.accuracy}%</span>
            </div>

            <div className="cat-bar-track">
              <div
                className="cat-bar-fill"
                style={{
                  width: `${cat.accuracy}%`,
                  background: isWeak
                    ? 'linear-gradient(90deg, #f43f5e 0%, #fb7185 100%)'
                    : 'linear-gradient(90deg, var(--gold-deep) 0%, var(--gold-default) 50%, var(--gold-light) 100%)'
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}