import { FC } from 'react';
import BoardSquare from './board-square';
import MoveTrough from './move-trough';
import { RowProps } from '../types';

const BoardRow: FC<RowProps> = ({ row, rowIndex, holdPiece, heldPiece, movePiece, moveHistory }) => {
    return (
        <><tr>{moveHistory.length !== 0 && rowIndex === 8 &&
            <MoveTrough moveHistory={moveHistory} />
        }{row.map((square, columnIndex) =>
            <BoardSquare
                square={square}
                key={`row-${rowIndex}-column-${columnIndex}`}
                movePiece={movePiece}
                holdPiece={holdPiece}
                heldPiece={heldPiece}
                rowIndex={rowIndex}
                columnIndex={columnIndex}
            />
        )} </tr></>
    );
};

export default BoardRow;