import React, { useState } from 'react';

const MovingButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    setPosition({ x, y });
  };

  return (
    <button
      onMouseEnter={moveButton}
      style={{
        position: position.x ? 'fixed' : 'relative',
        left: position.x,
        top: position.y,
      }}
      className="btn btn-no"
    >
      No
    </button>
  );
};

export default MovingButton;