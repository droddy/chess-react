import { FC } from 'react';
import { Team } from './enum';
import { Square, SquareProps } from '../types';
import BoardPiece from './board-piece';

const loggingPrefix = 'board-commands -- ';
let functionPrefix = ' -- ';
let firstClickedSquare: Square | undefined = undefined;

const BoardSquare: FC<SquareProps> = ({ square, holdPiece, heldPiece, movePiece, rowIndex, columnIndex }) => {
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

export default BoardSquare