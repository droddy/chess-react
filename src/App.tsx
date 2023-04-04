import logo from './logo.svg';
import './App.css';
import { boardGrid, setupBoard, printBoard, movePiece, e, f, b } from './board-commands';

function App() {

  console.clear();
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
  console.log('app -- e7-e5 -- Legal');
  movePiece(e, 7, e, 5) // this should work for black's first move
  printBoard();

  // ILLEGAL WHITE TURN
  console.log('app -- e4-e5 -- ILLEGAL - pawn, capture not diagonal');
  movePiece(e, 4, e, 5) // this should not work for white pawn to capture straight ahead
  printBoard();

  // WHITE TURN
  console.log('');
  console.log('app -- b2-b3 -- Legal');
  movePiece(b, 2, b, 3) // this should work for white pawn to move one space forward
  printBoard();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <table className="dataintable">
          <tbody>
            {boardGrid.map((row, rowI) => {
              return (
                <tr key={`row-${rowI}`}>
                  {row.map((squatter, columnI) => {
                    return (
                      <td key={`column-${rowI}-${columnI}`}>{squatter}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
