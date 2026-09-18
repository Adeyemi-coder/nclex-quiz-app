import React, { useRef, useState } from 'react';
import { useMouseTilt } from '../../hooks/useMouseTilt';
import './HoloPortrait.css';
import Ken from '../../assets/Ken.png'; // <--- Change this to Ken.png

export default function HoloPortrait({
  imageSrc = Ken,
  caption = 'Built by Adeyemi Kehinde, RN Candidate',
  alt = 'Candidate Hero Portrait',
  showParticles = true,
  interactive = true,
}) {
  const cardRef = useRef(null);
  const [imageError, setImageError] = useState(false);
  const { rotateX, rotateY, shineX, shineY } = useMouseTilt(cardRef, {
    maxTilt: 10,
    enabled: interactive,
  });

  return (
    <div className="holo-stage-wrapper">
      {showParticles && (
        <div className="holo-particles-field" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className={`holo-particle dot-${i + 1}`} />
          ))}
        </div>
      )}

      <div className="holo-ambient-glow" aria-hidden="true" />

      <div
        ref={cardRef}
        className="holo-card"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          '--shine-x': `${shineX}%`,
          '--shine-y': `${shineY}%`,
        }}
      >
        <div className="corner-bracket top-left" />
        <div className="corner-bracket top-right" />
        <div className="corner-bracket bottom-left" />
        <div className="corner-bracket bottom-right" />

        <div className="holo-sheen-overlay" />

        <div className="holo-viewport">
          {!imageError ? (
            <img
              src={imageSrc}
              alt={alt}
              className="holo-core-img"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="holo-fallback-box">
              <span className="fallback-monogram">✦</span>
              <p className="fallback-note">Place image at: {imageSrc}</p>
            </div>
          )}
        </div>

        {caption && <figcaption className="holo-caption">{caption}</figcaption>}
      </div>
    </div>
  );
}