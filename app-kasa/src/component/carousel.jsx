import React, { useState } from 'react';
import '../css/carousel.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct
import leftArrow from '../assets/arrow-left.png'; // Assurez-vous que le chemin vers votre image est correct
import rightArrow from '../assets/arrow-right.png'; // Assurez-vous que le chemin vers votre image est correct

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageCount = images ? images.length : 0; // Assurez-vous de vérifier si images est défini avant d'accéder à sa propriété length

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? imageCount - 1 : prevIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === imageCount - 1 ? 0 : prevIndex + 1);
    };

    return (
        <div className="carousel-container">
            {imageCount > 0 && (
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="carousel-image" />
            )}
            {imageCount > 1 && (
                <div className="carousel-arrows">
                    <button className="carousel-arrow" onClick={handlePrevClick}>
                        <img src={leftArrow} alt="Previous" className="arrow-icon" />
                    </button>
                    <button className="carousel-arrow" onClick={handleNextClick}>
                        <img src={rightArrow} alt="Next" className="arrow-icon" />
                    </button>
                </div>
            )}
            {imageCount > 1 && (
                <div className="carousel-counter">
                    {currentImageIndex + 1}/{imageCount}
                </div>
            )}
        </div>
    );
};

export default Carousel;
