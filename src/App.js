import React, { useState } from 'react';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

function decremennCount() {
  setCount(prevCount => prevCount -1)
}
function incrementCount() {
  setCount(prevCount => prevCount +1)
}

  return (
    <>
      <button onClick={decremennCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <p>this app demonstes a counter hooked up by using useStates components in react</p>
    </>
  )
}

export default App;