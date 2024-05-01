import React from 'react';
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

    if (!lodging)
        return <ErrorPage />;
    
    const { title, location, tags, description, equipments, pictures, host, rating } = lodging;

    const equipmentItems = equipments.map((equipment, index) => (
        <span key={index} className="equipment">{equipment}</span>
    ));

    return (
        <div className="lodging-page">
            <Carousel images={pictures} />
            <div className="title-container">
                <h1 className="title">{title}</h1>
                <p className="location">{location}</p>

                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
           
            <div className="container">
                <div className="host-info">
                    <div className='name'>
                        <p className="first-name">{host.name.split(' ')[0]}</p>
                        <p className="last-name">{host.name.split(' ')[1]}</p>
                    </div>
                    <img src={host.picture} alt="Host" className="host-picture" />
                </div>
                {/* Affiche le composant StarRating avec la note actuelle */}
                <StarRating className="star-rating" initialRating={rating} /> 
             </div>

            <div className="collapseDiv">
                <Collapse title="Description" content={description} />
                <Collapse title="Equipement" content={equipmentItems} />
            </div>
        </div>
    );
}

export default LodgingPage;
