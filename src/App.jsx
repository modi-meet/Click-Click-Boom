import React, { useState, useEffect } from 'react';
import './App.css'
import Confetti from 'react-confetti';
import Counter from './components/counter.jsx'

function App() {
  const[count, setCount] = useState(0); // hook for counting 
  const [isSuperCelebrating, setSuperCelebrating] = useState(false); // hook for celebration effect on App

  useEffect(() => {
    if (count >= 115) {
      setSuperCelebrating(true);

      // stop the celebration
      const timer = setTimeout(() => setSuperCelebrating(false), 15000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className={`app-container ${isSuperCelebrating ? 'celebrate-bg' : ''}`}>
      {isSuperCelebrating && <Confetti style={{ pointerEvents: 'none' }} />}
      <h1>Click, Click, Boom!</h1>

      {/* Pass the count and the ability to set it, to the Counter-component */}
      <Counter count={count} setCount={setCount} />
    </div>
  )
}

export default App
