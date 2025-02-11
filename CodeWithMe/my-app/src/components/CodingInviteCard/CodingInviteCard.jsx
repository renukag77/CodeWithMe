import React, { useState } from 'react';
import MovingButton from './MovingButton';
import ParticleEffect from './ParticleEffect';

const CodingInviteCard = () => {
  const [hearts, setHearts] = useState([]);

  const createHeart = (x, y) => {
    const newHeart = {
      id: Date.now(),
      x,
      y,
    };
    setHearts(prev => [...prev, newHeart]);
    setTimeout(() => {
      setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 1000);
  };

  const handleYesClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    createHeart(rect.left + rect.width / 2, rect.top + rect.height / 2);
    setTimeout(() => {
      window.location.href = 'https://www.geeksforgeeks.org/';
    }, 500);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">
          Do you wanna learn coding with me?
        </h1>
        
        <div className="image-container">
          <img 
            src="/assets/bugcat-capoo.gif"
            alt="Cute Capoo"
          />
        </div>

        <div className="button-container">
          <button
            onClick={handleYesClick}
            className="btn btn-yes"
          >
            Yes
          </button>
          <MovingButton />
        </div>

        <ParticleEffect hearts={hearts} />
      </div>
    </div>
  );
};

export default CodingInviteCard;