import React, { useEffect, useState } from 'react'; // Importation des hooks useEffect et useState depuis React
import Banner from '../component/banner'; // Importation du composant Banner
import CardGallery from '../component/card-gallery'; // Importation du composant CardGallery
import coverPhotoHomePage from '../assets/Banner-Img.jpg'; // Importation de l'image de couverture
import { useNavigate } from 'react-router-dom'; // Importation du hook useNavigate depuis react-router-dom
import '../css/kasa-home.css'; // Importation de la feuille de style CSS pour la page d'accueil

const KasaHome = () => {
  const [accommodations, setAccommodations] = useState([]); // Déclaration d'un état pour stocker les données des logements  (accomodations permet de consulter la donnée, setAccomodation permet de stocker/modifier la donnée)
  const navigate = useNavigate(); // Initialisation du hook useNavigate pour la navigation

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        // Effectuez un fetch vers JSON pour récupérer les données des logements
        const response = await fetch('/logement.json'); // Requête pour récupérer les données JSON
        const data = await response.json(); // Conversion de la réponse en format JSON
        setAccommodations(data); // Mise à jour de l'état avec les données des logements
      } catch (error) {
        console.error('Erreur lors de la récupération des données des logements :', error); // Affichage d'une erreur en cas d'échec de récupération des données
      }
    };

    fetchAccommodations(); // Appel de la fonction pour récupérer les données des logements lors du montage du composant
  }, []); // Utilisation du hook useEffect pour effectuer une action au montage du composant, avec un tableau de dépendances vide pour ne l'exécuter qu'une seule fois

  function onClick(id) {
    // Naviguer vers la page de logement correspondante en utilisant l'ID du logement
    navigate(`/lodging/${id}`); // Utilisation du hook useNavigate pour la navigation vers la page de détails du logement en utilisant son ID
  }
  
  return (
    <>
      <Banner image={coverPhotoHomePage} text="Chez vous, partout et ailleurs" className="home-banner" /> {/* Affichage du composant Banner avec une image de couverture et un texte */}
      <CardGallery accommodations={accommodations} onClick={onClick} /> {/* Affichage du composant CardGallery avec les données des logements et la fonction onClick */}
    </>
  );
};

export default KasaHome; // Exportation du composant KasaHome
