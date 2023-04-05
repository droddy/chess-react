import { FC, useRef } from 'react';
import { Square, Team } from '../board-commands';

interface squareProps { square: Square };


const BoardSquare: FC<squareProps> = ({ square }) => {
    const node = useRef(null);
    const symbol = square.piece?.symbol || '';
    const symbolNotClicked = 'App-symbolNotClicked';
    const symbolHeld = 'App-symbolHeld';

    const updateSquareClass = (event: React.MouseEvent<Element, MouseEvent>) => {
        console.log('piece clicked on');

        console.log(`replacing class ${symbolNotClicked} with ${symbolHeld}`)
        event.currentTarget.classList.toggle(symbolNotClicked);
        event.currentTarget.classList.toggle(symbolHeld);
    }

    return (
        <>
            <td ref={node}
                className={
                    (square.color === Team.black
                        ? ' App-board-cell-black'
                        : ' App-board-cell') + ` ${symbolNotClicked}`}
                onClick={updateSquareClass}
            ><span className={`App-symbol`}>{symbol}</span></td>
        </>
    );
};

interface rowProps { row: Square[], rowIndex: number }

const BoardRow: FC<rowProps> = ({ row, rowIndex }) => {
    return (
        <>
            <tr>
                {
                    row.map((square, columnIndex) =>
                        <BoardSquare
                            square={square}
                            key={`row-${rowIndex}-column-${columnIndex}`} />
                    )}
            </tr>
        </>
    );

}

export default BoardRow;