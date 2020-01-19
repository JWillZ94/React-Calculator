import React from 'react';
import './App.css';
import Calc from '../Calc/Calc';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React.js Calculator</h1>
        <Calc />
      </header>
    </div>
  );
}

export default App;
