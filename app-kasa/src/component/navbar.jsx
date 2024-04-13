import React from 'react';
import LogoSVG from '../component/logo-kasa'; 

function KasaNavbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Utilisez le composant du logo SVG ici */}
        <LogoSVG color="#FF6060" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">A propos</a></li>
      </ul>
    </nav>
  );
}

export default KasaNavbar;
