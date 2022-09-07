import React from 'react';
import './Card.css';

const Card = ({stance, name, obstacle, tutorial, id}) => {
  return (
    <div className='card'>
      <h3>{stance}{name}</h3>
      <p>obstacle{obstacle}</p>
      <a href={tutorial}>Link to Tutorial</a>
      <button>🗑</button>
    </div>
  )
}

export default Card;