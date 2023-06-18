import React from 'react';
import './Footer.css';
import logo from '../../assets/download-pq3fsnaitgyylurbfryzighm46y9be58loymts4eok.webp'; 
const Footer = () => {
  

  return (
    <footer className="footer">
      <p className="footer-text">PoweredBy <img className="footer-image" src={logo} alt="PoweredBy" />Pabau</p>
    </footer>
  );
};

export default Footer;
