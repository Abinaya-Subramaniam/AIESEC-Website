import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import igt from '../images/iGT.png';
import ogt from '../images/oGT.png';
import igv from '../images/iGV.png';
import ogv from '../images/oGV.png';

const Opportunities = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Opportunities Await</h1>
      <div className="row">
        {/* oGV  */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src={ogv} 
              className="card-img-top"
              alt="oGV"
            />
            <div className="card-body">
              <h5 className="card-title">oGV (Outgoing Global Volunteer)</h5>
              <p className="card-text">
                Explore outgoing volunteer opportunities with AIESEC.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* oGT*/}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src={ogt} 
              className="card-img-top"
              alt="oGT"
            />
            <div className="card-body">
              <h5 className="card-title">oGT (Outgoing Global Talent)</h5>
              <p className="card-text">
                Explore outgoing talent development opportunities with AIESEC.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* iGT*/}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src= {igt} 
              className="card-img-top"
              alt="iGT"
            />
            <div className="card-body">
              <h5 className="card-title">iGT (Incoming Global Talent)</h5>
              <p className="card-text">
                Explore incoming talent development opportunities with AIESEC.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* iGV */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src={igv} 
              className="card-img-top"
              alt="iGV"
            />
            <div className="card-body">
              <h5 className="card-title">iGV (Incoming Global Volunteer)</h5>
              <p className="card-text">
                Explore incoming volunteer opportunities with AIESEC.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;









/* import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/opportunities')
      .then(response => setOpportunities(response.data))
      .catch(error => console.error('Error fetching opportunities:', error));
  }, []);

  return (
    <div className="container">
      <h1>Opportunities</h1>
      <div className="row">
        {opportunities.map(opportunity => (
          <div className="col-md-4" key={opportunity._id}>
            <div className="card">
              <img src="/path-to-placeholder.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{opportunity.name}</h5>
                <p className="card-text">{opportunity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities; */
