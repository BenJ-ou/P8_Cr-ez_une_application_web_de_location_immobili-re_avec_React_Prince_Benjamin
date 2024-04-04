import React from 'react';
import KasaNavbar from '../component/navbar';
import KasaFooter from '../component/footer';
import Banner from '../component/banner';
import CardGallery from '../component/card-gallery'; 
import '../css/kasa-home.css';

export default function KasaHome() {
  return (
    <>
      <KasaNavbar />
      <Banner /> 
      <CardGallery /> 
      <KasaFooter />
    </>
  );  
}
