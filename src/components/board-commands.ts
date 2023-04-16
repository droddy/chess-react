import { Team } from "./enum";
import { Pieces } from "./constants";
import { Board, Piece, Square } from "../types";
const getNewChessBoardEndpoint = "https://us-central1-chess-enforcer-firebase.cloudfunctions.net/getNewChessBoard";
const moveChessPieceEndpoint = "https://us-central1-chess-enforcer-firebase.cloudfunctions.net/moveChessPiece"

const apiGet = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data as T;
}
const apiPost = async <T>(url: string, stuff: any): Promise<T> => {
    const fetchOptions = { method: "POST", body: JSON.stringify(stuff) }
    console.debug('fetchOptions:')
    console.debug(fetchOptions);
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const result = await response.json();
    return result as T;
}

const GetNewBoard = async () => {
    const board: Board = await apiGet<Board>(getNewChessBoardEndpoint);
    placePiecesOnNewBoard(board);
    return board;
};
const MovePiece = async (fromSquare: Square, toSquare: Square, board: Board, currentTeam: Team) => {
    const newBoard: Board | undefined = await apiPost<Board>(moveChessPieceEndpoint, { fromSquare, toSquare, board, currentTeam });
    return newBoard;
};
const placePiecesOnNewBoard = (board: Board) => {
    const pieces = [...Pieces];
    pieces.forEach(piece => {
        let foundStartSquare = getPieceStartingSquare(piece, board);
        if (!!foundStartSquare)
            foundStartSquare.piece = piece;
    });
}
const getPieceStartingSquare = (piece: Piece, board: Board) => {
    return board.find(square =>
        square.rank === piece.startRank
        && square.file === piece.startFile);
};

export { GetNewBoard, MovePiece };
