import React from 'react';
import './school.css';

const School = ({backgroundImage}) => {
  return (
    <div className="school-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="school">

        <div>
          <p><strong>College:</strong></p>
          <p>Bohol Island State University - Balilihan Campus , Magsija , Balilihan , Bohol</p>
        </div>
      </div>
    </div>
  );
};

export default School;