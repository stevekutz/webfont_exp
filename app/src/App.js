import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './styles/stylesheet.css';

function App() {
  return (
    <div className="App">
        <h1> styled h1</h1>
        <h2> styled h2</h2>
        <p style = {{fontFamily: 'climbing_plantregular', textAlign: 'center'}}>
            p is special font styled
        </p>
    </div>
  );
}

export default App;
