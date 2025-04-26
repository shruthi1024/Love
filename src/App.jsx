import React, { useState } from 'react';
import './index.css'

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);

  const calculatelove = () => {
    if (!name1 || !name2) {
      setResult("Please enter both names.");
      return;
    }
    
    const loveScore = Math.floor(Math.random() * 101);
    setResult(`Your love score is ${loveScore}%`);
  };
  

  return (
    <div>
      <i><h1>Love Calculator</h1></i>
      <input 
        type="text" 
        placeholder="Enter first name" 
        value={name1} 
        onChange={(e) => setName1(e.target.value)}
      /><br></br>
      <input 
        type="text" 
        placeholder="Enter second name" 
        value={name2} 
        onChange={(e) => setName2(e.target.value)}
      /><br></br>
      <button onClick={calculatelove}>Calculate Love</button>
      {result && <h2>{result}</h2>}
    </div>
  );
  
}

export default App;