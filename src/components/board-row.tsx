import { FC, useEffect, useState } from 'react';
import { Team } from '../board-commands';
import { Square } from '../types';

type squareProps = { square: Square, moveHandler: (fromSquare: Square, toSquare: Square) => void }

let firstClickedSquare: string | undefined = undefined;

const BoardSquare: FC<squareProps> = ({ square, moveHandler }) => {
    const symbol = square.piece?.symbol || '';
    const symbolNotClicked = 'App-symbolNotClicked';
    const symbolHeld = 'App-symbolHeld';
    const [pieceClass, setPieceClass] = useState(symbolNotClicked);

    const clickSquare = (event: React.MouseEvent<Element, MouseEvent>) => {

        const clickedSquare = event.currentTarget.getAttribute('data-square');
        console.debug('clickedSquare:');
        console.debug(JSON.stringify(clickedSquare));

        if (clickedSquare) {

            if (firstClickedSquare) {
                /* #region console.debug */
                // console.debug('second click')
                // console.debug('firstClickedSquare:');
                /* #endregion */
                console.debug(JSON.stringify(firstClickedSquare));

                setPieceClass(symbolNotClicked);
                moveHandler(JSON.parse(firstClickedSquare), JSON.parse(clickedSquare));
                console.debug('resetting clickCount');
                firstClickedSquare = undefined;
                return;
            }
            /* #region console.debug */
            // console.debug('first click')
            // console.debug('currentSquare:');
            // console.debug(clickedSquare);
            /* #endregion */
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