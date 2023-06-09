import React from 'react';

const BreedDetails = ({ breed }) => {
  return (
    <div>
      <img src={breed.image} alt={breed.name} />
      <h2>{breed.name}</h2>
      {/* Display additional details about the breed */}
    </div>
  );
};

export default BreedDetails;
