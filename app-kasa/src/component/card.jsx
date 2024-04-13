// Card.jsx
import React from 'react';


const Card = ({ id, title, cover, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
