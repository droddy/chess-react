import { FC } from 'react';
import { Square, Team } from '../board-commands';

interface squareProps { square: Square, moveHandler: (fromSquare: Square, toSquare: Square) => void };

let firstClickedSquare: string | undefined = undefined;

const BoardSquare: FC<squareProps> = ({ square, moveHandler }) => {
    const symbol = square.piece?.symbol || '';
    const symbolNotClicked = 'App-symbolNotClicked';

    const clickSquare = (event: React.MouseEvent<Element, MouseEvent>) => {

        const clickedSquare = event.currentTarget.getAttribute('data-square');
        console.debug('clickedSquare:');
        console.debug(JSON.stringify(clickSquare));

        if (!!clickedSquare) {

            if (!!firstClickedSquare) {
                // console.debug('second click')
                // console.debug('firstClickedSquare:');
                console.debug(JSON.stringify(firstClickedSquare));

                moveHandler(JSON.parse(firstClickedSquare), JSON.parse(clickedSquare));
                console.debug('resetting clickCount');
                firstClickedSquare = undefined;
                return;
            }
            // console.debug('first click')
            // console.debug('currentSquare:');
            // console.debug(clickedSquare);
            firstClickedSquare = clickedSquare;
        }
    }
    const clickPiece = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.currentTarget.classList.toggle('App-symbolNotClicked');
        event.currentTarget.classList.toggle('App-symbolHeld');
    }

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
                    className={'App-symbol App-symbolNotClicked'}>{symbol}</span>
            </td>
        </>
    );
};

interface rowProps { row: Square[], rowIndex: number, moveHandler: (fromSquare: Square, toSquare: Square) => void }

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

}

export default BoardRow;