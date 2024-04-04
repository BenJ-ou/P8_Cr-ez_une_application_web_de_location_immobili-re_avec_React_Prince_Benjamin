// CardGallery.jsx
import React from 'react';
import accommodations from '../../public/logement.json';
import '../css/card.css';

const Card = ({ id, title, cover }) => (
  <div className="card">
    <img src={cover} alt={title} />
    <h2>{title}</h2>
  </div>
);

const CardGallery = () => (
  <div className="card-gallery">
    {accommodations.map(accommodation => (
      <Card key={accommodation.id} {...accommodation} />
    ))}
  </div>
);

export default CardGallery;
