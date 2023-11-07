import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

   
    const timerId = setInterval(incrementCount, 1000);

    
    return () => {
      clearInterval(timerId);
    };
  }, []); 

  return (
    <div>
      <h1>Timer</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;

