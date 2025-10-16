import React, { useEffect, useState } from 'react';

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/matches')
      .then(res => res.json())
      .then(data => setMatches(data));
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      <ul>
        {matches.map(m => (
          <li key={m.id}>
            Match #{m.id}: Wrestler {m.wrestler1} vs Wrestler {m.wrestler2} — Winner: Wrestler {m.winner}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Matches;