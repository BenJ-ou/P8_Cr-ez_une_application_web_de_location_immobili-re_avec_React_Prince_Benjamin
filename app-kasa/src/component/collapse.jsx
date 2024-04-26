import React, { useState } from 'react';
import arrowBack2 from '../assets/arrow_back2.png'; // Import de l'icône de flèche vers le haut
import '../css/collapse.css'; // Import du fichier CSS pour le style du composant

const Collapse = ({ title, content }) => {
    // Déclaration de l'état pour contrôler l'ouverture ou la fermeture du contenu du collapsible
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour gérer le clic sur le collapsible
    const handleClick = () => {
        // Inversion de l'état isOpen lors du clic
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            {/* Contenu de l'en-tête du collapsible */}
            <div className="collapse-header">
                {/* Titre du collapsible */}
                <p>{title}</p>
                {/* Icône de flèche qui tourne vers le haut ou vers le bas en fonction de l'état isOpen */}
                <img className={`collapse-icon ${isOpen ? 'rotate-up' : 'rotate-down'}`} src={isOpen ? arrowBack2 : arrowBack2} alt='collapse icon'/>
            </div>
            {/* Affiche le contenu uniquement si isOpen est true */}
            {isOpen && (
                <div className="collapse-content">
                    {/* Contenu à afficher, transmis via le prop content */}
                    {content}
                </div>
            )}
        </div>
    );
};

export default Collapse;
