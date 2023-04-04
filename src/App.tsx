import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { setupBoard, printBoard, movePiece, e, f } from './board-commands';

function App() {
  useEffect(() => {
    setupBoard();
    printBoard();
    // WHITE TURN
    console.log('app -- e2-e4 -- Legal');
    movePiece(e, 2, e, 4) // this should work as the first move of white 
    printBoard();
    // ILLEGAL TURN
    console.log('app -- f2-f4 -- ILLEGAL - Wrong Team');
    movePiece(f, 2, f, 4) // this should not work because the turn should be black
    printBoard();
    // BLACK TURN
    console.log('');
    console.log('app -- e7-e5 -- Legal');
    movePiece(e, 7, e, 5) // this should work for black's first move
    printBoard();
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
