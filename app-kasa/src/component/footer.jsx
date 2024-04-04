// Footer.jsx
import React from 'react';
import LogoSVG from '../component/logo-kasa'; 

export default function Footer() {
  return (
    <footer className='footer'>
     <LogoSVG color="#FFFFFF" /> 
      <p className='footer-copyright'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
