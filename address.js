import React from 'react';
import './address.css'; // Rename the CSS file accordingly

const Residences = ({ backgroundImage }) => {
  return (
    <div className="Residences-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>Residences</h2>
      <div className="residence-list">
        <div>
          <p><strong>Province:</strong></p>
          <p>Bohol</p>
        </div>
        <div>
          <p><strong>Municipality:</strong></p>
          <p>Balilihan</p>
        </div>
        <div>
          <p><strong>Barangay:</strong></p>
          <p>Tagustusan</p>
        </div>
      </div>
    </div>
  );
};

export default Residences;
