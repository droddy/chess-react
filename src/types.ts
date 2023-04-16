import { PieceDescription, Rank, Team } from './components/enum';

export type Piece = { color?: Team; description?: PieceDescription; symbol?: string; startRank: Rank; startFile: string; };
export type Square = { color: Team, piece?: Piece, rank: Rank, file: string };
export type Board = Square[];
export type MoveHistory = { fromSquare: Square, toSquare: Square }[];
export type RowProps = {
    row: Square[],
    rowIndex: number,
    holdPiece: (piece: Piece) => void,
    heldPiece: Piece | undefined,
    movePiece: (fromSquare: Square, toSquare: Square) => Promise<void>,
    moveHistory: { fromSquare: Square, toSquare: Square }[]
};
export type SquareProps = {
    square: Square,
    holdPiece: (piece: Piece) => void,
    heldPiece: Piece | undefined,
    movePiece: (fromSquare: Square, toSquare: Square) => Promise<void>,
    rowIndex: number,
    columnIndex: number
};
export type PieceProps = {
    className: string,
    symbol: string
};
export type TroughProps = {
    moveHistory: { fromSquare: Square, toSquare: Square }[]
}

