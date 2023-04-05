import { FC } from 'react';
import { Square } from '../board-commands';

interface squareProps { value: string, columnIndex: number, rowIndex: number };

const BoardSquare: FC<squareProps> = ({ value: squatter, columnIndex, rowIndex }) => {
    return (
        <>
            <td
                className={rowIndex % 2
                    ? columnIndex % 2
                        ? 'App-board-cell-black'
                        : 'App-board-cell'
                    : columnIndex % 2
                        ? 'App-board-cell'
                        : 'App-board-cell-black'}
            >{squatter}</td>
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
                            value={square.piece?.symbol || ''}
                            rowIndex={rowIndex}
                            columnIndex={columnIndex}
                            key={`row-${rowIndex}-column-${columnIndex}`} />
                    )}
            </tr>
        </>
    );

}

export default BoardRow;