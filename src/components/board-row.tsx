import { FC } from 'react';
import { Team } from '../enum';
import { Piece, Square } from '../types';

const loggingPrefix = 'board-commands -- ';
let functionPrefix = ' -- ';
let firstClickedSquare: Square | undefined = undefined;

type pieceProps = {
    className: string,
    symbol: string
};

const BoardPiece: FC<pieceProps> = ({ className, symbol }) => {
    return (<>
        <span
            className={`App-symbol ${className}`}>{symbol}</span>
    </>)
}

type squareProps = {
    square: Square,
    holdPiece: (piece: Piece) => void,
    heldPiece: Piece | undefined,
    movePiece: (fromSquare: Square, toSquare: Square) => void,
    moveHistory: { fromSquare: Square, toSquare: Square }[],
    rowIndex: number,
    columnIndex: number
};

const BoardSquare: FC<squareProps> = ({ square, holdPiece, heldPiece, movePiece, moveHistory, rowIndex, columnIndex }) => {
    functionPrefix = 'BoardSquare -- '
    const symbol = square.piece?.symbol || '';
    const symbolNotHeld = 'App-symbolNotHeld';
    const symbolHeld = 'App-symbolHeld';
    const startFilesMatch = heldPiece?.startFile === square.piece?.startFile;
    const startRanksMatch = heldPiece?.startRank === square.piece?.startRank;

    let iHaveHeldPiece = startFilesMatch && startRanksMatch;
    const clickSquare = () => {
        functionPrefix += 'clickSquare -- '

        if (!!firstClickedSquare) {
            movePiece(firstClickedSquare, square);

            console.debug(`${loggingPrefix}${functionPrefix}un-setting first clicked square`);
            firstClickedSquare = undefined;
        } else {
            if (!!square.piece) holdPiece(square.piece)

            console.debug(`${loggingPrefix}${functionPrefix}setting first clicked square`);
            firstClickedSquare = square;
        }
    };
    return (
        <>
            <td
                className={
                    square.color === Team.black
                        ? ' App-board-cell-black'
                        : ' App-board-cell'}
                onClick={clickSquare}
                data-square={JSON.stringify(square)}
            >
                <BoardPiece
                    className={iHaveHeldPiece ? symbolHeld : symbolNotHeld}
                    symbol={symbol}
                    key={`piece${rowIndex}${columnIndex}`} />
            </td>
        </>
    );
};

type rowProps = {
    row: Square[],
    rowIndex: number,
    holdPiece: (piece: Piece) => void,
    heldPiece: Piece | undefined,
    movePiece: (fromSquare: Square, toSquare: Square) => void,
    moveHistory: { fromSquare: Square, toSquare: Square }[]
};

const BoardRow: FC<rowProps> = ({ row, rowIndex, holdPiece, heldPiece, movePiece, moveHistory }) => {
    return (
        <>
            <tr>
                {moveHistory.length !== 0 && rowIndex === 8 &&
                    <td key='rowSpanCell' rowSpan={8}>{moveHistory.map(
                        move => {
                            return (<div key={`rowSpanDiv${move.fromSquare.file}${move.fromSquare.rank}-${move.toSquare.file}${move.toSquare.rank}`}> {move.fromSquare.file}{move.fromSquare.rank}-{move.toSquare.file}{move.toSquare.rank} </div>)
                        }
                    )}
                    </td>
                }
                {
                    row.map((square, columnIndex) =>
                        <BoardSquare
                            square={square}
                            key={`row-${rowIndex}-column-${columnIndex}`}
                            movePiece={movePiece}
                            holdPiece={holdPiece}
                            heldPiece={heldPiece}
                            moveHistory={moveHistory}
                            rowIndex={rowIndex}
                            columnIndex={columnIndex}
                        />
                    )}
            </tr>
        </>
    );

};

export default BoardRow;