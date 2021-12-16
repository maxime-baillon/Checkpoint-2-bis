import React from 'react';

const Header = ({ nameSite }) => {
  nameSite = 'football Club';
  return (
    <div className="header">
      <h1>Bienvenue sur {nameSite}</h1>
    </div>
  );
};

export default Header;
