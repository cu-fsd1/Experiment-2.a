import React, { useState } from 'react';
import './App.css'; // Optional for styling

const App = () => {
  const [text, setText] = useState('');
  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="app-container">
      <h1>Live Character Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        rows="10"
        cols="50"
      />
      <div className="counter">
        <p>Character Count: {text.length}</p>
      </div>
    </div>
  );
};

export default App;