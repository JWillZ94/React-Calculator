import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Calc from '../Calc/Calc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
        <Calc />
      </header>
    </div>
  );
}

export default App;
