import React from 'react';
import Wrestlers from './Wrestlers';
import Events from './Events';
import Matches from './Matches';

function App() {
  return (
    <div>
      <h1>Pro Wrestling App</h1>
      <Wrestlers />
      <Events />
      <Matches />
    </div>
  );
}

export default App;