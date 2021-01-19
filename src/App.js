import React, { useState } from 'react';
import Article from './Article';

function App() { 
  const [title, setTitle] = useState([{titre:"Harry Potter"},{titre:"Le seigneur des anneaux"},{titre:"Avengers"}]);
  return (
    <div>
      <Article titre={title}/> 
    </div>
  );
}

export default App;
