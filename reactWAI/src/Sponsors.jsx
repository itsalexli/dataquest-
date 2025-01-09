import React from 'react';
import './Sponsors.css'; // Ensure you create this CSS file

const Sponsors = () => {
  return (
    <>
      <div className="container">
        <div className="grid">
          {Array(9).fill().map((_, index) => (
            <div className="card" key={index}>
              <img src="./assets/placeholder.png" alt="placeholder" className="icon" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
