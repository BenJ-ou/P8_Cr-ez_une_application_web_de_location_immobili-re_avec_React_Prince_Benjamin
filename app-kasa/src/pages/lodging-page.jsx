// lodging.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import accommodationsData from '../../public/logement.json';
import Collapse from '../component/collapse';
import Carousel from '../component/carousel'; // Importez le composant Carousel
import '../css/lodging.css';

function LodgingPage() {
    const { id } = useParams();

    // Recherche du logement correspondant à l'id
    const lodging = accommodationsData.find(lodging => lodging.id === id);

    // Si aucun logement correspondant n'est trouvé, afficher une erreur
    if (!lodging) {
        return <div>Logement introuvable</div>;
    }

    // Construction du contenu des équipements
    const equipmentContent = lodging.equipments.map((equipment, index) => <span key={index} className="equipment">{equipment}</span>);

    return (
        <div className="lodging-page">
            <Carousel images={lodging.pictures} />
            <h1 className="title">{lodging.title}</h1> {/* Style pour le titre en rouge */}
            <p className="location">{lodging.location}</p> {/* Style simple pour la location */}
            <div className="tags"> {/* Style pour les tags dans des cercles allongés rouges avec du texte blanc */}
                {lodging.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="collapseDiv">
                <Collapse title="Description" content={lodging.description} />
                <Collapse title="Equipement" content={equipmentContent} />
            </div>
        </div>
    );
}

export default LodgingPage;
