import { FC, useEffect, useState } from 'react';
import { Team } from '../enum';
import { Square } from '../types';

const loggingPrefix = 'board-commands -- ';
let functionPrefix = ' -- ';

type squareProps = { square: Square, moveHandler: (fromSquare: Square, toSquare: Square) => void }

let firstClickedSquare: string | undefined = undefined;

const BoardSquare: FC<squareProps> = ({ square, moveHandler }) => {
    functionPrefix = 'BoardSquare -- '
    const symbol = square.piece?.symbol || '';
    const symbolNotClicked = 'App-symbolNotClicked';
    const symbolHeld = 'App-symbolHeld';
    const [pieceClass, setPieceClass] = useState(symbolNotClicked);

    const clickSquare = (event: React.MouseEvent<Element, MouseEvent>) => {

        const clickedSquare = event.currentTarget.getAttribute('data-square');
        functionPrefix += 'clickSquare -- '
        // console.debug('clickedSquare:');
        // console.debug(JSON.stringify(clickedSquare));

        if (clickedSquare) {

            if (!!firstClickedSquare) {
                // console.debug('second click')
                // console.debug('firstClickedSquare:');
                // console.debug(JSON.stringify(firstClickedSquare));

                setPieceClass(symbolNotClicked);
                moveHandler(JSON.parse(firstClickedSquare), JSON.parse(clickedSquare));
                console.log(`${loggingPrefix}${functionPrefix}board-row -- resetting clickCount`);
                firstClickedSquare = undefined;
                return;
            }
            // console.debug('first click')
            // console.debug('currentSquare:');
            // console.debug(clickedSquare);
            firstClickedSquare = clickedSquare;
        }
    };
    const clickPiece = (event: React.MouseEvent<Element, MouseEvent>) => {
        // event.currentTarget.classList.toggle(symbolNotClicked);
        // event.currentTarget.classList.toggle(symbolHeld);
        setPieceClass((current) => {
            if (current === symbolNotClicked) return symbolHeld;
            return symbolNotClicked;
        });
    };

    useEffect(() => {
        setPieceClass(symbolNotClicked);
    }, [square]);

    return (
        <>
            <td
                className={
                    (square.color === Team.black
                        ? ' App-board-cell-black'
                        : ' App-board-cell') + ` ${symbolNotClicked}`}
                onClick={clickSquare}
                data-square={JSON.stringify(square)}
            >
                <span
                    onClick={clickPiece}
                    className={`App-symbol ${pieceClass}`}>{symbol}</span>
            </td>
        </>
    );
};

type rowProps = { row: Square[], rowIndex: number, moveHandler: (fromSquare: Square, toSquare: Square) => void }

const BoardRow: FC<rowProps> = ({ row, rowIndex, moveHandler }) => {
    return (
        <>
            <tr>
                {
                    row.map((square, columnIndex) =>
                        <BoardSquare
                            square={square}
                            key={`row-${rowIndex}-column-${columnIndex}`}
                            moveHandler={moveHandler} />
                    )}
            </tr>
        </>
    );

};

export default BoardRow;