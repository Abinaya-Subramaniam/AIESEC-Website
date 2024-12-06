import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';
import im1 from '../images/im1.jpg';
import im2 from '../images/im2.jpg';
import im3 from '../images/im3.jpg';
import im4 from '../images/im4.jpg';
import im5 from '../images/im5.jpg';
import im6 from '../images/im6.jpg';
import lcp from '../images/lcp.jpg';
import explore from '../images/explore.jpg'; 
import { Link } from 'react-router-dom'; 

const Home = () => (
  <div className="container mt-4">
    {/* Carousel Section */}
    <Carousel interval={2000} controls={true} indicators={true}>
      {/* 1. Carousel Item */}
      <Carousel.Item>
        <div style={{ position: 'relative' }}>
          <img src={carousel1} className="d-block w-100" alt="First slide" />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)', 
              backgroundColor: 'rgba(0, 0, 0, 0.6)', 
              padding: '10px 20px',
              color: 'white', 
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
          >
            Hey AIESEC!
          </div>
        </div>
      </Carousel.Item>

      {/* 2. Carousel item */}
      <Carousel.Item>
        <div style={{ position: 'relative' }}>
          <img src={carousel2} className="d-block w-100" alt="Second slide" />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)', 
              backgroundColor: 'rgba(0, 0, 0, 0.6)', 
              padding: '10px 20px',
              color: 'white', 
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
          >
            Welcome to AIESEC in CS
          </div>
        </div>
      </Carousel.Item>

      {/* 3. Carousel Item */}
      <Carousel.Item>
        <div style={{ position: 'relative' }}>
          <img src={carousel3} className="d-block w-100" alt="Third slide" />
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)', 
              backgroundColor: 'rgba(0, 0, 0, 0.6)', 
              padding: '10px 20px',
              color: 'white', 
              fontSize: '1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
            }}
          >
            A Journey of Excellence
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
   {/* What is AIESEC -. section1 */}
<section 
  id="about-us"
  className="what-is-aiesec mt-5"
  style={{
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  }}
>
  <h2 style={{ marginBottom: '2rem', color: '#037ef3' }}>Discover <span style={{ color: '#000' }}>AIESEC</span></h2>
  
  <div 
    className="aiesec-cards"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
    }}
  >
    {/* What is AIESEC_card */}

<div 
  className="card aiesec-card" 
  style={{
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(244, 92, 66, 0.2)', 
    borderLeft: '6px solid #f45c42', 
    textAlign: 'left',
  }}
>
  <h3 style={{ color: '#f45c42', marginBottom: '1rem' }}>What is AIESEC?</h3>
  <p style={{ lineHeight: '1.6', color: '#555' }}>
    AIESEC is the world’s largest youth-led organization, currently present in over 110 nations with a vision to achieve peace and fulfillment of humankind’s potential. AIESEC facilitates a network of cross-cultural exchanges to enable leadership development in the form of:
  </p>
  <ul style={{ color: '#f45c42', marginTop: '1rem' }}>
    <li>Volunteering Experiences</li>
    <li>Professional Internships</li>
    <li>Teaching Opportunities</li>
    <li>Membership Experiences</li>
  </ul>
</div>

{/* What is AIESEC in Colombo South Card */}
<div 
  className="card colombo-south-card" 
  style={{
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 4px 12px rgba(3, 126, 243, 0.2)', 
    borderLeft: '6px solid #037ef3', 
    textAlign: 'left',
  }}
>
  <h3 style={{ color: '#037ef3', marginBottom: '1rem' }}>AIESEC in Colombo South</h3>
  <p style={{ lineHeight: '1.6', color: '#555' }}>
    AIESEC Sri Lanka consists of 6 local committees. AIESEC in University of Moratuwa, also known as AIESEC in Colombo South, is one of the first local committees in Sri Lanka. It has a wide membership along with 4 initiative groups.
  </p>
  
  <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#777' }}>
    Join us to discover a world of possibilities and make a global impact right from Colombo South!
  </p>

  {/* Join now aiesec. */}
  <button 
    style={{
      marginTop: '1.5rem',
      padding: '0.8rem 1.5rem',
      backgroundColor: '#037ef3', 
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'not-allowed', 
      opacity: 0.7, 
    }}
    disabled // Button disabled since registrations are not open
  >
    Hold Tight! Recruitment Will Open Soon
  </button>
</div>


  </div>
</section>

    {/* YouTube Video Embed Section */}
    <section className="unlock-potential mt-5" style={{ padding: '3rem', borderRadius: '12px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '2rem' }}>Catch a Glimpse at Lead CS 10.0</h2>
      <div className="video-container" style={{ marginBottom: '2rem' }}>
        <iframe width="100%" height="615" src="https://www.youtube.com/embed/JuIgZZBIm0s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="image-gallery mt-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', padding: '2rem', borderRadius: '8px', backgroundColor: '#f8f9fa', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '1.5rem', color: '#037ef3' }}>Moments Captured</h2>
      {[{ src: im1, alt: 'Gallery Image 1' }, { src: im2, alt: 'Gallery Image 2' }, { src: im3, alt: 'Gallery Image 3' }, { src: im4, alt: 'Gallery Image 4' }, { src: im5, alt: 'Gallery Image 5' }, { src: im6, alt: 'Gallery Image 6' }].map((image, index) => (
        <div key={index} style={{ overflow: 'hidden', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}>
          <img src={image.src} alt={image.alt} style={{ width: '100%', height: '150px', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="gallery-image" />
        </div>
      ))}
    </section>

    {/* Message from LCP Section */}
    <section className="lcp-message mt-5 d-flex align-items-center" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
      <div className="lcp-image-container" style={{ width: '200px', height: '180px', overflow: 'hidden', borderRadius: '50%', border: '1px solid #037ef3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={lcp} className="lcp-image" alt="Local Committee President" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="lcp-message-text" style={{ marginLeft: '20px', fontSize: '16px', width: '66%' }}>
        <h2 style={{ marginTop: 0 }}>Message from the <span style={{ color: '#037ef3' }}>LCP</span></h2>
        <blockquote style={{ fontSize: '18px', fontStyle: 'italic', color: '#555', borderLeft: '5px solid #037ef3', paddingLeft: '15px', marginBottom: '1.5rem' }}>
          "Welcome to <span style={{ color: '#037ef3' }}>AIESEC</span> We are excited to have you here. <span style={{ color: '#037ef3' }}>AIESEC</span> is all about leadership, cultural exchange, and global opportunities. We aim to create a positive impact in society by empowering young people to become the leaders of tomorrow. Together, we can make a difference!"
        </blockquote>
        <p style={{ fontWeight: 'bold', color: '#037ef3' }}>- Sadeesha Sathmina</p>
      </div>
    </section>
  </div>
);

// Adding media query for mobile responsiveness
const style = `
  @media (max-width: 768px) {
    .lcp-message {
      display: flex;
      flex-direction: column; 
      text-align: center;
    }
    .lcp-heading {
      order: 1; 
    }
    .lcp-image-container {
      order: 2; 
      margin-bottom: 1rem;
      width: 120px;
      height: 120px;
    }
    .lcp-message-text {
      order: 3; 
      width: 100%;
      margin-left: 0;
    }
    .aiesec-cards {
      grid-template-columns: 1fr;
    }
    .video-container iframe {
      height: 315px;
    }
  }
`;



document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`);

export default Home;
