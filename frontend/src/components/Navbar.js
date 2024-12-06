import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import logo from '../images/logo.jpg'; 

const Navbar = () => (
  <>
    <style>
      {`
        
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

        
        .navbar-nav .nav-link {
          color: #000; 
          font-weight: normal; 
          position: relative;
          padding-bottom: 5px; 
          transition: color 0.3s ease; 
          font-family: 'Lato', sans-serif; 
        }

        
        .navbar-nav .nav-link:hover {
          color: #037ef3; 
        }

        /* Underline animation (Desktop) */
        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #037ef3;
          transition: width 0.3s ease; 
        }

        .navbar-nav .nav-link:hover::after {
          width: 100%; 
        }

        /* Mobile responsive styling */
        @media (max-width: 992px) {
          .navbar-nav {
            text-align: center;
          }

          .navbar-nav .nav-item {
            margin-bottom: 10px;
          }

          .navbar-toggler {
            border: none; 
          }

          
          .navbar-nav .nav-link::after {
            content: none;
          }

          
          .navbar-nav .nav-link:hover {
            color: #037ef3; 
            background-color: rgba(3, 126, 243, 0.1); 
          }
        }
      `}
    </style>

    <nav className="navbar navbar-expand-lg bg-white" style={navbarStyle}> 
      <div className="container">
        
        <Link className="navbar-brand" to="/" style={logoStyle}>
          <img
            src={logo}  
            alt="CS"
            style={{ width: '40px', height: '40px' }}
          />
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <Link className="nav-link" to="/" style={linkStyle}>Home</Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setTimeout(() => {
                
                  const element = document.getElementById("about-us");
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 200)} 
                style={linkStyle}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/opportunities" style={linkStyle}>Opportunities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events" style={linkStyle}>Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);


const navbarStyle = {
  backgroundColor: '#fff', 
  fontFamily: "'Lato', sans-serif", 
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0',
};

const linkStyle = {
  color: '#000', 
  paddingBottom: '5px', 
  fontFamily: "'Lato', sans-serif", 
  fontWeight: 'normal', 
};

export default Navbar;
