import React, { useState } from 'react';
import '../css/carousel.css'; // Importation du fichier CSS pour le carrousel
import leftArrow from '../assets/arrow-left.png'; // Importation de l'icône de flèche gauche
import rightArrow from '../assets/arrow-right.png'; // Importation de l'icône de flèche droite

const Carousel = ({ images }) => {
    // Utilisation du hook useState pour gérer l'index de l'image actuelle dans le carrousel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Vérification si des images sont présentes
    const imageCount = images ? images.length : 0; 

    // Fonction pour passer à l'image précédente
    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? imageCount - 1 : prevIndex - 1);
    };

    // Fonction pour passer à l'image suivante
    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === imageCount - 1 ? 0 : prevIndex + 1);
    };

    return (
        <div className="carousel-container">
            {/* Affichage de l'image actuelle si des images sont présentes */}
            {imageCount > 0 && (
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="carousel-image" />
            )}
            {/* Affichage des flèches de navigation si plus d'une image est présente */}
            {imageCount > 1 && (
                <div className="carousel-arrows">
                    {/* Bouton pour passer à l'image précédente */}
                    <button className="carousel-arrow" onClick={handlePrevClick}>
                        <img src={leftArrow} alt="Previous" className="arrow-icon" />
                    </button>
                    {/* Bouton pour passer à l'image suivante */}
                    <button className="carousel-arrow" onClick={handleNextClick}>
                        <img src={rightArrow} alt="Next" className="arrow-icon" />
                    </button>
                </div>
            )}
            {/* Affichage du compteur d'images si plus d'une image est présente */}
            {imageCount > 1 && (
                <div className="carousel-counter">
                    {currentImageIndex + 1}/{imageCount}
                </div>
            )}
        </div>
    );
};

export default Carousel;
