import React from 'react';
import KasaNavbar from '../component/kasa-navbar';
import KasaFooter from '../component/kasa-footer';
import bannerImage from '../assets/Banner-Img.jpg';
import '../css/kasa-banner.css' 

export default function KasaHome() {
  return (
    <>
      <KasaNavbar />
      {/* Contenu de la page */}
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" /> {/* Utilisez la variable contenant l'image importée */}
        <div className="banner-text">
          <h1>Bienvenue chez Kasa</h1>
          <p>Découvrez des logements uniques et vivez des expériences exceptionnelles.</p>
        </div>
      </div>
      {/* Footer */}
      <KasaFooter />
    </>
  );  
}
