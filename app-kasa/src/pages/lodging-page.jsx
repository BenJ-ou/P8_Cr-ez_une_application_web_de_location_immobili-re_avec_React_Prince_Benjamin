// LodgingPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import accommodationsData from '../../public/logement.json';
import Collapse from '../component/collapse';
import Carousel from '../component/carousel';
import StarRating from '../component/star-rating';
import ErrorPage from '../pages/error-page';

import '../css/lodging.css';

function LodgingPage() {
    const { id } = useParams();
    const lodging = accommodationsData.find(lodging => lodging.id === id);
    const [rating, setRating] = useState(lodging.rating); // État local pour stocker la note

       if (!LodgingPage)
         return <ErrorPage />;
         console.log('ErroPage');

    const { title, location, tags, description, equipments, pictures, host } = lodging;

    const equipmentItems = equipments.map((equipment, index) => (
        <span key={index} className="equipment">{equipment}</span>
    ));

    const handleRatingChange = (newRating) => {
        // Met à jour la note dans l'état local
        setRating(newRating);
        // Mettre en œuvre la logique de mise à jour de la note dans votre application
        // Vous pouvez envoyer la nouvelle note à votre API backend, par exemple
    };

    return (
        <div className="lodging-page">
            <Carousel images={pictures} />
            <div className="title-container">
                <h1 className="title">{title}</h1>
                <div className="host-info">
                    <p className="first-name">{host.name.split(' ')[0]}</p>
                    <p className="last-name">{host.name.split(' ')[1]}</p>
                    <img src={host.picture} alt="Host" className="host-picture" />
                </div>
            </div>
            <p className="location">{location}</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
                {/* Affiche le composant StarRating avec la note actuelle */}
                <StarRating initialRating={rating} onRatingChange={handleRatingChange} />
            </div>
            <div className="collapseDiv">
                <Collapse title="Description" content={description} />
                <Collapse title="Equipement" content={equipmentItems} />
            </div>
        </div>
    );
}

export default LodgingPage;
