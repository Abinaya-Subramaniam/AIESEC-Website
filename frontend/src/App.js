import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Opportunities from './pages/Opportunities';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import EventDetailPage from './pages/EventDetailPage'; 

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about-us" element={<AboutUs />} />
      
      
      <Route path="/event/:eventId" element={<EventDetailPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
