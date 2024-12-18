import React from 'react';
import { useParams } from 'react-router-dom';
import leadcs1 from '../images/leadcs1.jpg';
import leadcs2 from '../images/leadcs2.jpg';
import leadcs3 from '../images/leadcs3.jpg';
import leadcs4 from '../images/leadcs4.jpg';
import gv1 from '../images/gv1.jpg';
import gv2 from '../images/gv2.jpg';
import gv3 from '../images/gv3.jpg';
import gv4 from '../images/gv4.jpg';
import idealize1 from '../images/idealize1.jpg';
import idealize2 from '../images/idealize2.jpg';
import idealize3 from '../images/idealize3.jpg';
import idealize4 from '../images/idealize4.jpg';
import hope1 from '../images/hope1.jpg';
import hope2 from '../images/hope2.jpg';
import hope3 from '../images/hope3.jpg';
import hope4 from '../images/hope4.jpg';
import cs1 from '../images/cs1.jpg';
import cs2 from '../images/cs2.jpg';
import cs3 from '../images/cs3.jpg';
import cs4 from '../images/cs4.jpg';
import bbc1 from '../images/bbc1.jpg';
import bbc2 from '../images/bbc2.jpg';
import bbc3 from '../images/bbc3.jpg';
import bbc4 from '../images/bbc4.jpg';

const EventDetailPage = () => {
  const { eventId } = useParams();

  const eventsData = {
    1: {
      title: 'Lead CS',
      images: [leadcs1, leadcs2, leadcs3, leadcs4],
      description:
        'LEAD CS is the annual Leadership Development Seminar organized by AIESEC in University of Moratuwa. This event facilitates our new members with fundamental leadership skills through proper coaching and team-building sessions along with professional educators and facilitators certified in leadership training.',
      videoUrl: 'https://www.youtube.com/embed/JuIgZZBIm0s',
    },
    2: {
      title: 'Global Village',
      images: [gv1, gv2, gv3, gv4],
      description:
        'Global Village, organized by AIESEC in University of Moratuwa, is the cultural festival of foreign Exchange Participants from all over the world and AIESEC in 19 universities all across the country...',
      videoUrl: 'https://www.youtube.com/embed/tPsRuAU2CDY',
    },
    3: {
      title: 'IDEALIZE',
      images: [idealize1, idealize2, idealize3, idealize4],
      description:
        'Idealize 2024 is a Mobile App and Web development competition beyond an ordinary ideathon organized by AIESEC in University of Moratuwa for school students...',
      videoUrl: 'https://www.youtube.com/embed/LLq2C7A8gfM',
    },
    4: {
      title: 'Hope',
      images: [hope1, hope2, hope3, hope4],
      description:
        'HOPE is a community development project which focuses on the activities aimed at uplifting those in need and creating a closer, more connected community...',
      videoUrl: 'https://www.youtube.com/embed/OqkWciDonuQ',
    },
    5: {
      title: 'CS Eminence',
      images: [cs1, cs2, cs3, cs4],
      description:
        'CS Eminence is the most glamorous and remarkable extravaganza within the AIESEC journey of the University of Moratuwa...',
      videoUrl: 'https://www.youtube.com/embed/hEbIO82zeEc',
    },
    6: {
      title: 'Beauty Beyond Ceylon',
      images: [bbc1, bbc2, bbc3, bbc4],
      description:
        '"Beauty Beyond Ceylon 2.0" is an international event offering a unique chance to explore global cultures without leaving Sri Lanka...',
      videoUrl: 'https://www.youtube.com/embed/FEC3qujCU1s',
    },
  };

  const event = eventsData[eventId];

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-uppercase" style={{ fontSize: '2.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
        {event.title}
      </h1>

      {/* Event Description */}
      <div
        className="event-description mt-4"
        style={{
          fontSize: '1.2rem',
          color: '#333',
          lineHeight: '1.6',
          textAlign: 'justify',
          fontFamily: "'Arial', sans-serif",
        }}
      >
        <p>{event.description}</p>
      </div>

      {/* YouTube Embed */}
      <div className="event-video mt-4">
        <h3 className="text-center mb-3" style={{ fontSize: '1.8rem', color: '#444' }}>
          Watch the Aftermovie
        </h3>
        <div
          className="embed-responsive embed-responsive-16by9"
          style={{
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <iframe
            className="embed-responsive-item"
            src={event.videoUrl}
            title="Event Aftermovie"
            allowFullScreen
            style={{ border: 'none', width: '100%', height: '400px', borderRadius: '10px' }}
          ></iframe>
        </div>
      </div>

      {/* Event Images */}
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="d-flex flex-wrap justify-content-center">
            {event.images.map((image, index) => (
              <div
                key={index}
                className="event-image-container"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  marginBottom: '1rem',
                  marginRight: '1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
              >
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="d-block w-100 rounded"
                  style={{
                    objectFit: 'cover',
                    height: '200px',
                    borderRadius: '8px',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
