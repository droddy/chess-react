import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Team, getNewBoard, movePiece, File, Rank, Board } from './board-commands';

function App() {
  const [currentTeam, setCurrentTeam] = useState(Team.white);
  const [board, setBoard] = useState(getNewBoard());
  const [boardGrid, setBoardGrid] = useState([['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '']]);
  const [moveIndex, setMoveIndex] = useState(0);
  
  const reprintBoard = () => {
    let boardGridCopy = [...boardGrid];
    board.forEach((square, index) => {
      let piece = square.piece ? square.piece : null;
      let targetRank = Math.abs(square.rank - 8);
      // console.debug(`piece: ${piece}`)
      if (piece === null) {
        // console.debug(`targeting boardcopy[${square.rank - 1}]`)
        boardGridCopy[targetRank][index - (8 * targetRank)] = ``;
      } else {
        // console.debug(`targeting boardcopy[${square.rank - 1}]`)
        boardGridCopy[targetRank][index - (8 * targetRank)] = `${piece.symbol}`;
      }
    });
    console.table(boardGridCopy);
    setBoardGrid(boardGridCopy);
  };

  let testMoves: any[][] = [];
  testMoves.push([File.e, Rank.two, File.e, Rank.four])// WHITE TURN - this should work as the first move of white
  testMoves.push([File.f, Rank.two, File.f, Rank.four])// ILLEGAL TURN - this should not work because the turn should be black
  testMoves.push([File.e, Rank.seven, File.e, Rank.five])// BLACK TURN - this should work for black's first move
  testMoves.push([File.e, Rank.four, File.e, Rank.five])// ILLEGAL WHITE TURN - this should not work for white pawn to capture straight ahead
  testMoves.push([File.b, Rank.two, File.b, Rank.three])// WHITE TURN - this should work for white pawn to move one space forward

  const nextMove = () => {
    const newBoard = movePiece(testMoves[moveIndex][0], testMoves[moveIndex][1], testMoves[moveIndex][2], testMoves[moveIndex][3], board, currentTeam);
    if(!!newBoard) setBoard(newBoard);
    reprintBoard();
    setCurrentTeam(currentTeam === Team.black ? Team.white : Team.black);
    setMoveIndex(moveIndex + 1);
  }

  const resetBoard = () => {
    setBoard(getNewBoard());
    reprintBoard();
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <table className="dataintable">
          <tbody>
            {boardGrid && boardGrid.map((row, rowI) => {
              return (
                <tr key={`row-${rowI}`}>
                  {row.map((squatter, columnI) => {
                    return (
                      <td
                        className={
                          rowI % 2
                            ? columnI % 2
                              ? 'App-board-cell-black'
                              : 'App-board-cell'
                            : columnI % 2
                              ? 'App-board-cell'
                              : 'App-board-cell-black'}
                        key={`column-${rowI}-${columnI}`}>{squatter}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={nextMove}>make a move</button><br />
        <button onClick={resetBoard} >reset board</button>
      </header>
    </div>
  );
}

export default App;
