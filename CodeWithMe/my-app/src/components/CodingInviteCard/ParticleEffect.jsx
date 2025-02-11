import React from 'react';

const ParticleEffect = ({ hearts }) => {
  return (
    <>
      {hearts.map(heart => (
        <div
          key={heart.id}
          style={{
            left: heart.x,
            top: heart.y,
          }}
          className="heart"
        />
      ))}
    </>
  );
};

export default ParticleEffect;