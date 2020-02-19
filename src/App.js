import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Time and Weather</h1>
        <div>
        <img className="h-icon" alt="clock" src="./time.png"/> 
        <br />
        <img className="h-icon" alt="cloud" src="./cloud.png"/>
        </div>
        <p>
          By Anna Riazantceva and David Hauser
        </p>
      </header>
    </div>
  );
}


export default App;
