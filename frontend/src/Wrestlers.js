import React, { useEffect, useState } from 'react';

function Wrestlers() {
  const [wrestlers, setWrestlers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/wrestlers')
      .then(res => res.json())
      .then(data => setWrestlers(data));
  }, []);

  return (
    <div>
      <h2>Wrestlers</h2>
      <ul>
        {wrestlers.map(w => (
          <li key={w.id}>
            {w.name} ({w.nickname}) - {w.weightClass}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wrestlers;