// KasaHome.jsx
import React, { useEffect, useState } from 'react';
import Banner from '../component/banner';
import CardGallery from '../component/card-gallery';
import coverPhotoHomePage from '../assets/Banner-Img.jpg';
import '../css/kasa-home.css';

const KasaHome = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        // Effectuez un fetch vers JSON
        const response = await fetch('/logement.json'); 
        const data = await response.json();
        setAccommodations(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données des logements :', error);
      }
    };

    fetchAccommodations();
  }, []);

  function onClick(id) {
    console.log("click sur le logement avec l'id :", id);
    // Naviguer vers la page de logement correspondante
    window.location.href = `/lodging/${id}`;
  }

  return (
    <>
      <Banner image={coverPhotoHomePage} text="Chez vous, partout et ailleurs" className="home-banner" />
      <CardGallery accommodations={accommodations} onClick={onClick} />
    </>
  );
};

export default KasaHome;
