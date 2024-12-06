import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import leadcs5 from '../images/leadcs5.jpg';
import gv2 from '../images/gv2.jpg';
import cs1 from '../images/cs1.jpg';
import cs4 from '../images/cs4.jpg';
import idealize1 from '../images/idealize1.jpg';
import hope1 from '../images/hope1.jpg';
import bbc1 from '../images/bbc1.jpg';


const upcomingEvent = {
  title: 'CS Eminence',
  eventId: 5,
  imageUrl: cs4,
  eventDate: new Date('2025-01-15T00:00:00'), 
};

const CountdownCard = ({ event }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const timeDiff = event.eventDate - now;

      if (timeDiff <= 0) {
        setTimeLeft('Event is live!');
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); 

    return () => clearInterval(interval); 
  }, [event]);

  return (
    <Card className="mb-4 shadow-lg" style={{ width: '100%' }}>
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src={event.imageUrl} alt={event.title} style={{ height: '300px', objectFit: 'cover' }} />
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 215, 0, 0.27)', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card.Body className="text-center text-white" style={{ padding: '1rem' }}>
            <Card.Title style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}>
              {event.title}
            </Card.Title>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FFD700' }}>{timeLeft}</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>Stay Tuned!</p>
            <Link to={`/event/${event.eventId}`} className="stretched-link" />
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};


const EventCard = ({ title, eventId, imageUrl }) => (
  <Card
    className="mb-4 shadow-lg event-card"
    style={{
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s ease-in-out',
    }}
  >
    <div className="card-img-container" style={{ position: 'relative' }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={title}
        className="card-img"
        style={{
          height: '200px',
          objectFit: 'cover',
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'background 0.3s ease-in-out',
        }}
      >
        <Card.Body
          className="d-flex flex-column justify-content-center align-items-center text-center text-white"
          style={{ padding: '1rem' }}
        >
          <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</Card.Title>
          <Link to={`/event/${eventId}`} className="stretched-link" />
        </Card.Body>
      </div>
    </div>
    
    <style jsx>{`
      .event-card:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      }

      .event-card .card-img-container {
        transition: transform 0.3s ease-in-out;
      }

      .event-card:hover .card-img-container {
        transform: scale(1.1);
      }
    `}</style>
  </Card>
);

const Events = () => {
  const events = [
    { id: 1, title: 'Lead CS', imageUrl: leadcs5 },
    { id: 2, title: 'Global Village', imageUrl: gv2 },
    { id: 3, title: 'Idealize', imageUrl: idealize1 },
    { id: 4, title: 'Hope', imageUrl: hope1 },
    { id: 5, title: 'CS Eminence', imageUrl: cs1 },
    { id: 6, title: 'BBC', imageUrl: bbc1 },
  ];

  return (
    <div className="container mt-4">
      
      <div className="row mb-4">
        <div className="col-md-12">
          <CountdownCard event={upcomingEvent} />
        </div>
      </div>

      {/* Events */}
      <h1 className="text-center mb-4">Our Past Events</h1>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4">
            <EventCard title={event.title} eventId={event.id} imageUrl={event.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
