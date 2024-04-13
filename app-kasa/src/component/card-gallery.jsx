// CardGallery.jsx
import React from 'react';
import Card from '../component/card';
import '../css/card.css';

const CardGallery = ({ accommodations, onClick }) => (
  <div className="card-gallery">
    {accommodations.map(accommodation => (
      <Card key={accommodation.id} {...accommodation} onClick={onClick} />
    ))}
  </div>
);


export default CardGallery;
