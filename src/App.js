import React from 'react';
import logo from './logo.svg';
import './App.css';
import './LightSwitch.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Codaisseur, visitor
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Title content="Some Simple Title" />
        <LightSwitch />
      </main>
    </div>
  );
}

export default App;
