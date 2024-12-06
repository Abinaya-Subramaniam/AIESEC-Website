import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => (
  <footer className="bg-light py-4">
    <div className="container text-center">
      
      <div className="mb-3">
        <Link to="#" className="mx-3 text-dark">
          <FaFacebook size={30} />
        </Link>
        <Link to="#" className="mx-3 text-dark">
          <FaInstagram size={30} />
        </Link>
        <Link to="#" className="mx-3 text-dark">
          <FaLinkedin size={30} />
        </Link>
      </div>

      
      <p className="text-muted">
        2024-2025 © All Rights Reserved | AIESEC in Colombo South
      </p>
    </div>
  </footer>
);

export default Footer;
