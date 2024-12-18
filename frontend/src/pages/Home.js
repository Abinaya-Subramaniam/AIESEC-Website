import React from 'react';
//import { Carousel } from 'react-bootstrap';
import carousel from '../images/carousel.png';
import im1 from '../images/im1.jpg';
import im2 from '../images/im2.jpg';
import im3 from '../images/im3.jpg';
import im4 from '../images/im4.jpg';
import im5 from '../images/im5.jpg';
import im6 from '../images/im6.jpg';
import lcp from '../images/lcp.jpg';
import exploreImg from '../images/explore.jpg'
import { Link } from 'react-router-dom'; 



const Home = () => (
  <div className="container mt-4">

   {/* New Section: Jumpstart your career */}
   <section className="career-jumpstart-section mt-0" 
  style={{
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: '2rem', 
    borderRadius: '12px', 
    marginTop: '-40px',
    flexWrap: 'wrap'
  }}
>
  {/* Image on the top for mobile and left for desktop */}
  <div className="image-content" 
    style={{
      width: '45%', 
      textAlign: 'center',
      marginBottom: '1rem',
    }}
  >
    <img src={carousel} alt="Career Jumpstart" 
      style={{
        width: '100%', 
        height: 'auto', 
        borderRadius: '10px'
      }} 
    />
  </div>

  {/* Text content */}
  <div className="text-content" 
  style={{
    width: '50%',
    textAlign: 'left'
  }}
>
  <h2 style={{ fontWeight: 'bold', color: '#555', fontSize: '2.8rem' }}>
    Jumpstart your career with <span style={{ color: '#037ef3' }}>AIESEC</span> in Colombo South.
  </h2>
  <p style={{ fontSize: '1rem', color: '#555', marginTop: '1rem' }}>
  Take the first step towards an impactful career with us. Experience the world, develop your leadership skills, and make a difference.  </p>
</div>

  {/* Media Query for Mobile Devices */}
  <style>
    {`
      @media (max-width: 768px) {
        .career-jumpstart-section {
          flex-direction: column !important;
          align-items: center !important;
        }
        .text-content, .image-content {
          width: 100% !important;
        }
        .image-content {
          margin-bottom: 1rem !important; /* Space between image and text */
        }
      }
    `}
  </style>
</section>

{/* Explore Opportunities Section */}
<section 
      className="explore-opportunities mt-5"
      style={{
        background: `linear-gradient(135deg, rgba(12, 185, 193, 0.8), rgba(248, 90, 64, 0.8), rgba(244, 137, 36, 0.8)), url(${exploreImg}) center center/cover`, 
        padding: '3rem', 
        borderRadius: '12px', 
        color: '#fff', 
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        marginTop: '3rem',
      }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Explore Opportunities with CS</h2>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem' }}>
        Join us and explore diverse opportunities in Computer Science that can accelerate your career and broaden your horizons.
      </p>
      <Link to="/opportunities" style={{
        backgroundColor: '#037ef3', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        textDecoration: 'none', 
        color: '#fff', 
        fontSize: '1rem', 
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease-in-out',
      }}>
        Explore Now
      </Link>
    </section>





    
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

{/* Testimonial Section */}
<section>
  <div className="container mt-5">
    <h2 className="text-center mb-4">
      Meet <span style={{ color: '#037ef3' }}>AIESEC</span>ers!
    </h2>

    <div
      id="testimonialCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"  
      data-bs-pause="false"  
    >
      <div className="carousel-inner">
        {/* Testimonial 1 */}
        <div className="carousel-item active">
          <div
            className="card"
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              padding: '30px',
              textAlign: 'center',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
          >
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Client 1"
              style={{
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                margin: '0 auto',
              }}
            />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p
                className="card-text"
                style={{
                  fontStyle: 'italic',
                  color: '#555',
                  marginTop: '15px',
                }}
              >
                "This service changed my life! I was able to achieve more than I
                ever thought possible."
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="carousel-item">
          <div
            className="card"
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              padding: '30px',
              textAlign: 'center',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
          >
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Client 2"
              style={{
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                margin: '0 auto',
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p
                className="card-text"
                style={{
                  fontStyle: 'italic',
                  color: '#555',
                  marginTop: '15px',
                }}
              >
                "Amazing experience. The support I received was invaluable and
                helped me grow."
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="carousel-item">
          <div
            className="card"
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              padding: '30px',
              textAlign: 'center',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
          >
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Client 3"
              style={{
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                margin: '0 auto',
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Sam Wilson</h5>
              <p
                className="card-text"
                style={{
                  fontStyle: 'italic',
                  color: '#555',
                  marginTop: '15px',
                }}
              >
                "I couldn't ask for a better opportunity. The team is amazing and
                the process seamless."
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="carousel-item">
          <div
            className="card"
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              padding: '30px',
              textAlign: 'center',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
          >
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Client 4"
              style={{
                borderRadius: '50%',
                width: '150px',
                height: '150px',
                margin: '0 auto',
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Emma Watson</h5>
              <p
                className="card-text"
                style={{
                  fontStyle: 'italic',
                  color: '#555',
                  marginTop: '15px',
                }}
              >
                "A truly transformative experience. I learned so much and met
                wonderful people!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>




    
  </div>
);

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
