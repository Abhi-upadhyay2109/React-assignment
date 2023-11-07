import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  
    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

   
    const timer = setTimeout(incrementCount, 1000);

    
    return () => {
      clearTimeout(timer);
    };
  }, [count]); 

  return (
    <div>
      <h1>Timer</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default App;

