import React from 'react';

const League = ({ uneEquipe }) => {
  return (
    <div className="uneequipe">
      <h2>{uneEquipe.name}</h2>
      <img className="logo" src={uneEquipe.logos.light} alt="logo" />
    </div>
  );
};

export default League;
