import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    console.log('State changed');
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
