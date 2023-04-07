import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Team, getNewBoard, movePiece, File, Rank, Square } from './board-commands';
import BoardRow from './components/board-row';

function App() {
    const [currentTeam, setCurrentTeam] = useState(Team.white);
    const [board, setBoard] = useState(getNewBoard());
    const [moveIndex, setMoveIndex] = useState(0);

    /* #region test moves */
    // let testMoves: any[][] = [];
    // testMoves.push([File.e, Rank.two, File.e, Rank.four])// WHITE TURN - this should work as the first move of white
    // testMoves.push([File.f, Rank.two, File.f, Rank.four])// ILLEGAL TURN - this should not work because the turn should be black
    // testMoves.push([File.e, Rank.seven, File.e, Rank.five])// BLACK TURN - this should work for black's first move
    // testMoves.push([File.e, Rank.four, File.e, Rank.five])// ILLEGAL WHITE TURN - this should not work for white pawn to capture straight ahead
    // testMoves.push([File.b, Rank.two, File.b, Rank.three])// WHITE TURN - this should work for white pawn to move one space forward
    // testMoves.push([File.a, Rank.seven, File.a, Rank.six]) // // BLACK TURN - this should work for black pawn to move one space forward
    // testMoves.push([File.b, Rank.three, File.b, Rank.five])// ILLEGAL WHITE TURN this should not work for white pawn to move two spaces forward from non-start position
    // testMoves.push([File.b, Rank.three, File.b, Rank.four]) // LEGAL WHITE TURN - this should not work for white pawn to move two spaces forward from non-start position
    // testMoves.push([File.d, Rank.seven, File.d, Rank.five]) // BLACK TURN - this should work for black pawn to move two spaces forward
    // testMoves.push([File.e, Rank.four, File.d, Rank.five]) // WHITE TURN - this should work for white pawn to capture black pawn on the diagonal
    // testMoves.push([File.b, Rank.seven, File.a, Rank.six]) // ILLEGAL BLACK TURN - this should NOT work for black pawn to capture black pawn
    // testMoves.push([File.b, Rank.seven, File.c, Rank.six]) // ILLEGAL BLACK TURN - this should NOT work for black pawn to move on the diagonal without capture
    // testMoves.push([File.f, Rank.seven, File.f, Rank.four]) // ILLEGAL BLACK TURN - pawn more than 2 spaces
    // testMoves.push([File.e, 5, File.e, Rank.six]) // ILLEGAL BLACK TURN - cannot move backwards
    // testMoves.push([File.b, Rank.eight, File.b, Rank.six]) // ILLEGAL BLACK TURN - knight must L
    // testMoves.push([File.b, Rank.eight, File.c, Rank.six]) // LEGAL BLACK TURN - black knight
    // testMoves.push([File.h, 2, File.h, 3]) // LEGAL WHITE TURN - white pawn
    // testMoves.push([File.c, Rank.six, File.b, Rank.four]) // LEGAL BLACK TURN - black knight captures
    // testMoves.push([File.h, 3, File.h, Rank.four]) // LEGAL WHITE TURN - white pawn
    // testMoves.push([File.c, Rank.eight, File.b, Rank.six]) // ILLEGAL Black TURN - black bishop not diag
    // testMoves.push([File.a, Rank.eight, File.a, 7]) // LEGAL Black TURN - black rook attacks!
    // testMoves.push([File.f, 1, File.h, 3]) // ILLEGAL WHITE TURN - bishop move blocked
    // testMoves.push([File.f, 2, File.f, 3]) // LEGAL WHITE TURN 
    // testMoves.push([File.b, Rank.seven, File.b, Rank.six]) // LEGAL Black TURN 
    // testMoves.push([File.f, 1, File.f, 2]) // ILLEGAL WHITE TURN - bishop move not diagonal

    // const nextMove = () => {
    //   console.debug(`current team is : ${currentTeam}`)
    //   const newBoard = movePiece(testMoves[moveIndex][0], testMoves[moveIndex][1], testMoves[moveIndex][2], testMoves[moveIndex][3], board, currentTeam);
    //   if (!!newBoard) {
    //     setBoard(newBoard);
    //     setCurrentTeam(currentTeam === Team.black ? Team.white : Team.black);
    //   }
    //   setMoveIndex(moveIndex + 1);
    // }
    /* #endregion */

  const move = (fromSquare: Square, toSquare: Square) => {
    console.debug(`current team is : ${currentTeam}`);
    const newBoard = movePiece(fromSquare.file, fromSquare.rank, toSquare.file, toSquare.rank, board, currentTeam);
    if (!!newBoard) {
      setBoard(newBoard);
      setCurrentTeam(currentTeam === Team.black ? Team.white : Team.black);
    }   
    setMoveIndex(moveIndex + 1);
  }


    const resetBoard = () => {
        console.clear();
        setBoard(getNewBoard());
        setCurrentTeam(Team.white);
        setMoveIndex(0);
    };

  const printRows = () => {
    let rows = [];
    for (let i = 8; i > 0; i--) {
      // console.debug(`returning row ${i}`);
      rows.push(
        <BoardRow
          row={board.filter((square) => square.rank === i)}
          rowIndex={i}
          key={`row-${i}`}
          moveHandler={move} />
      );
    }
    return rows;
  }

  const clickBoard = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.currentTarget.classList.toggle('App-boardNotClicked');
    event.currentTarget.classList.toggle('App-boardSymbolHeld');
  }

    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <table className="dataintable" >
                    <tbody className='App-boardNotClicked' onClick={clickBoard}>
                        {board && printRows()}
                    </tbody>
                </table>
                <button onClick={resetBoard} >reset board</button>
            </header>
        </div>
    );
}

export default App;
