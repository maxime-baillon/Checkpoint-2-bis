import React, { useEffect, useState } from 'react';
import axios from 'axios';
import League from './League';

const Leagues = () => {
  const [equipes, setEquipes] = useState([]);
  const [filtre, setFilre] = useState(false);
  useEffect(() => {
    axios
      .get('https://api-football-standings.azharimm.site/leagues')
      .then((res) => {
        setEquipes(res.data.data);
        console.log(res.data.data);
      });
  }, []);
  return (
    <>
      <div className="leagues">
        {equipes
          //.filter((uneEquipe) => uneEquipe.name.includes('PREMIERE'))
          .map((equipe) => (
            <League uneEquipe={equipe} key={equipe.id} />
          ))}
      </div>
    </>
  );
};

export default Leagues;
