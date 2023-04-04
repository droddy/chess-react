export const a = 'a';
export const b = 'b';
export const c = 'c';
export const d = 'd';
export const e = 'e';
export const f = 'f';
export const g = 'g';
export const h = 'h';

type Piece = { color?: string; description?: string; symbol?: string; startRank: any; startFile: any; }
type Square = { piece?: Piece, rank: number, file: string }
type Board = Square[]

const black = 'black';
const white = 'white';
const rook = 'rook';
const pawn = 'pawn';
const knight = 'knight';
const bishop = 'bishop';
const king = 'king';
const queen = 'queen';

let board: Board = [];
let currentTurnTeam = '';

export const setupBoard = () => {
    currentTurnTeam = white;
    const Pieces =
        [
            { color: black, description: rook, symbol: '♜', startRank: 8, startFile: a }, { color: black, description: knight, symbol: '♞', startRank: 8, startFile: b }, { color: black, description: bishop, symbol: '♝', startRank: 8, startFile: c }, { color: black, description: king, symbol: '♚', startRank: 8, startFile: d }, { color: black, description: queen, symbol: '♛', startRank: 8, startFile: e }, { color: black, description: bishop, symbol: '♝', startRank: 8, startFile: f }, { color: black, description: knight, symbol: '♞', startRank: 8, startFile: g }, { color: black, description: rook, symbol: '♜', startRank: 8, startFile: h },
            { color: black, description: pawn, symbol: '♟︎', startRank: 7, startFile: a }, { color: black, description: pawn, symbol: '♟︎', startRank: 7, startFile: b }, { color: black, description: pawn, symbol: '♟︎', startRank: 7, startFile: c }, { color: black, description: pawn, symbol: '♟︎', startRank: 7, startFile: d }, { color: black, description: pawn, symbol: '♟︎', startRank: 7, startFile: e }, { color: black, description: pawn, symbol: '♟︎', startRank: 7, startFile: f }, { color: black, description: pawn, symbol: '♟︎', startRank: 7, startFile: g }, { color: black, description: pawn, symbol: '♟︎', startRank: 7, startFile: h },
            { color: white, description: pawn, symbol: '♙', startRank: 2, startFile: a }, { color: white, description: pawn, symbol: '♙', startRank: 2, startFile: b }, { color: white, description: pawn, symbol: '♙', startRank: 2, startFile: c }, { color: white, description: pawn, symbol: '♙', startRank: 2, startFile: d }, { color: white, description: pawn, symbol: '♙', startRank: 2, startFile: e }, { color: white, description: pawn, symbol: '♙', startRank: 2, startFile: f }, { color: white, description: pawn, symbol: '♙', startRank: 2, startFile: g }, { color: white, description: pawn, symbol: '♙', startRank: 2, startFile: h },
            { color: white, description: rook, symbol: '♖', startRank: 1, startFile: a }, { color: white, description: knight, symbol: '♘', startRank: 1, startFile: b }, { color: white, description: bishop, symbol: '♗', startRank: 1, startFile: c }, { color: white, description: king, symbol: '♔', startRank: 1, startFile: d }, { color: white, description: queen, symbol: '♕', startRank: 1, startFile: e }, { color: white, description: bishop, symbol: '♗', startRank: 1, startFile: f }, { color: white, description: knight, symbol: '♘', startRank: 1, startFile: g }, { color: white, description: rook, symbol: '♖', startRank: 1, startFile: h },
        ];

    let initBoard: Board = [
        { piece: undefined, rank: 8, file: a }, { piece: undefined, rank: 8, file: b }, { piece: undefined, rank: 8, file: c }, { piece: undefined, rank: 8, file: d }, { piece: undefined, rank: 8, file: e }, { piece: undefined, rank: 8, file: f }, { piece: undefined, rank: 8, file: g }, { piece: undefined, rank: 8, file: h },
        { piece: undefined, rank: 7, file: a }, { piece: undefined, rank: 7, file: b }, { piece: undefined, rank: 7, file: c }, { piece: undefined, rank: 7, file: d }, { piece: undefined, rank: 7, file: e }, { piece: undefined, rank: 7, file: f }, { piece: undefined, rank: 7, file: g }, { piece: undefined, rank: 7, file: h },
        { piece: undefined, rank: 6, file: a }, { piece: undefined, rank: 6, file: b }, { piece: undefined, rank: 6, file: c }, { piece: undefined, rank: 6, file: d }, { piece: undefined, rank: 6, file: e }, { piece: undefined, rank: 6, file: f }, { piece: undefined, rank: 6, file: g }, { piece: undefined, rank: 6, file: h },
        { piece: undefined, rank: 5, file: a }, { piece: undefined, rank: 5, file: b }, { piece: undefined, rank: 5, file: c }, { piece: undefined, rank: 5, file: d }, { piece: undefined, rank: 5, file: e }, { piece: undefined, rank: 5, file: f }, { piece: undefined, rank: 5, file: g }, { piece: undefined, rank: 5, file: h },
        { piece: undefined, rank: 4, file: a }, { piece: undefined, rank: 4, file: b }, { piece: undefined, rank: 4, file: c }, { piece: undefined, rank: 4, file: d }, { piece: undefined, rank: 4, file: e }, { piece: undefined, rank: 4, file: f }, { piece: undefined, rank: 4, file: g }, { piece: undefined, rank: 4, file: h },
        { piece: undefined, rank: 3, file: a }, { piece: undefined, rank: 3, file: b }, { piece: undefined, rank: 3, file: c }, { piece: undefined, rank: 3, file: d }, { piece: undefined, rank: 3, file: e }, { piece: undefined, rank: 3, file: f }, { piece: undefined, rank: 3, file: g }, { piece: undefined, rank: 3, file: h },
        { piece: undefined, rank: 2, file: a }, { piece: undefined, rank: 2, file: b }, { piece: undefined, rank: 2, file: c }, { piece: undefined, rank: 2, file: d }, { piece: undefined, rank: 2, file: e }, { piece: undefined, rank: 2, file: f }, { piece: undefined, rank: 2, file: g }, { piece: undefined, rank: 2, file: h },
        { piece: undefined, rank: 1, file: a }, { piece: undefined, rank: 1, file: b }, { piece: undefined, rank: 1, file: c }, { piece: undefined, rank: 1, file: d }, { piece: undefined, rank: 1, file: e }, { piece: undefined, rank: 1, file: f }, { piece: undefined, rank: 1, file: g }, { piece: undefined, rank: 1, file: h },
    ];

    board = [...initBoard];

    Pieces.forEach(piece => {

        let foundStartSquare = getPieceStartingSquare(piece);

        if (foundStartSquare !== undefined) foundStartSquare.piece = piece;
    })
};

export const printBoard = () => {
    let boardCopy = [['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '']];

    board.forEach((square, index) => {
        let piece = square.piece ? square.piece : null;
        let targetRank = Math.abs(square.rank - 8);
        // console.debug(`piece: ${piece}`)
        if (piece === null) {
            // console.debug(`targeting boardcopy[${square.rank - 1}]`)
            boardCopy[targetRank][index-(8*targetRank)] = `${square.file}${square.rank}`;
        } else {
            // console.debug(`targeting boardcopy[${square.rank - 1}]`)
            boardCopy[targetRank][index-(8*targetRank)] = `${piece.symbol}`;
        }
    });
    console.table(boardCopy);
}
export const movePiece = (fromFile: any, fromRank: any, toFile: any, toRank: any) => {
    const squareToMoveFrom = getSquare(fromFile, fromRank);
    if (!squareToMoveFrom) throw new Error('cannot determin squareToMoveFrom');

    const pieceToMove = squareToMoveFrom.piece
        ? squareToMoveFrom.piece
        : undefined;

    // console.debug(pieceToMove);
    // NOT COVERED
    if (!pieceToMove || !pieceToMove.color) { console.log('invalid piece'); return; }

    if (!isMoveTeamTurn(pieceToMove.color)) return;

    const squareToMoveTo = getSquare(toFile, toRank);
    if (!squareToMoveTo) throw new Error('cannot determine squareToMoveFrom');

    const isCapturingSelf = pieceToMove && squareToMoveTo.piece
        && pieceToMove.color === squareToMoveTo.piece.color;

    if (isCapturingSelf) {
        console.log('No piece can capture a piece on the same team')
        return false;
    }

    if (pieceToMove.description === pawn && !isLegalPawnMove(squareToMoveFrom, squareToMoveTo)) return;
    if (pieceToMove.description === knight && !isLegalKnightMove(squareToMoveFrom, squareToMoveTo)) return;
    if (pieceToMove.description === bishop && !isLegalBishopMove(squareToMoveFrom, squareToMoveTo)) return;
    if (pieceToMove.description === king && !isLegalKingMove(squareToMoveFrom, squareToMoveTo)) return;

    // NEEDS TEAM CANNOT PUT OWN KING INTO CHECK

    // DON'T PUT THIS BEFORE THESE ^^^ OR ALL HELL BREAKS LOOSE
    if (isMoveBlocked(squareToMoveFrom, squareToMoveTo, pieceToMove)) return;
    // DON'T PUT ^^^ BEFORE THOSE ^^^ OR ALL HELL BREAKS LOOSE

    squareToMoveTo.piece = pieceToMove;
    squareToMoveFrom.piece = undefined
    toggleCurrentTurnTeam();
}

const toggleCurrentTurnTeam = () => {
    currentTurnTeam === white ? currentTurnTeam = black : currentTurnTeam = white;
}
const getFile = (x: number) => {
    switch (x) {
        case 0: { return a; }
        case 1: { return b; }
        case 2: { return c; }
        case 3: { return d; }
        case 4: { return e; }
        case 5: { return f; }
        case 6: { return g; }
        case 7: { return h; }
    }
    throw new Error('could not match x to file string')
}
const getX = (file: string) => {
    switch (file) {
        case a: { return 0; }
        case b: { return 1; }
        case c: { return 2; }
        case d: { return 3; }
        case e: { return 4; }
        case f: { return 5; }
        case g: { return 6; }
        case h: { return 7; }
    }
    throw new Error('could not match file string to x')
}
const getFileDiff = (fromFile: string, toFile: string) => {
    const fromNum = getX(fromFile);
    const toNum = getX(toFile);
    // console.debug(`squareToMoveFrom.file: ${squareToMoveFrom.file}`)
    // console.debug(`squareToMoveTo.file: ${squareToMoveTo.file}`)
    // console.debug(`fromNum: ${fromNum}`)
    // console.debug(`toNum: ${toNum}`)
    return fromNum - toNum;
}
const getRankDiff = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw new Error('there must be a piece in the squareToMoveFrom');
    return squareToMoveFrom.piece.color === black
        ? squareToMoveFrom.rank - squareToMoveTo.rank
        : squareToMoveTo.rank - squareToMoveFrom.rank;
    // DO NOT DO THIS
    // we need negatives for pawns to be restricted to forward moves only
    // return Math.abs(squareToMoveTo.rank - squareToMoveFrom.rank)
}
const isMoveBlocked = (squareToMoveFrom: Square, squareToMoveTo: Square, pieceToMove: Piece) => {
    if (!squareToMoveFrom.piece) throw new Error('squareToMoveFrom must have a piece in it')
    console.log(`from ${squareToMoveFrom.file}${squareToMoveFrom.rank} to ${squareToMoveTo.file}${squareToMoveTo.rank}`)
    // Check for any pieces between start and end squares
    if (squareToMoveFrom.piece.description === knight) return false;

    const [startRank, startFileX] = [squareToMoveFrom.rank, getX(squareToMoveFrom.file)];
    const [endRank, endFileX] = [squareToMoveTo.rank, getX(squareToMoveTo.file)];
    const deltaRank = Math.sign(endRank - startRank);
    const deltaFile = Math.sign(endFileX - startFileX);
    let currentRank = startRank + deltaRank;
    let currentFileX = startFileX + deltaFile;
    console.debug(`currentRank: ${currentRank}`)
    console.debug(`currentFileX: ${currentFileX}`)
    console.debug(`deltaRank: ${deltaRank}`)
    console.debug(`deltaFile: ${deltaFile}`)
    while (currentRank !== endRank || currentFileX !== endFileX) {
        let currentFile = getFile(currentFileX);
        console.debug(`currentFile: ${currentFile}`)

        console.debug(`checking for blocked move at x,y - ${currentFileX},${currentRank}`)
        let currentSquare = getSquare(currentFile, currentRank);
        if (currentSquare && currentSquare.piece !== undefined) {
            console.log(`found piece blocking at ${currentSquare.file}${currentSquare.rank}, ${currentSquare.piece}`)
            return true;
        }
        currentRank += deltaRank;
        currentFileX += deltaFile;
    }
    return false;
}

const isMoveTeamTurn = (moveTeam: string) => {
    let result = moveTeam === currentTurnTeam;
    if (!result) console.log(`It is not ${moveTeam}'s turn.`);
    return result;
}

const isLegalKingMove = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw new Error('there must be a piece in the squareToMoveFrom');
    if (squareToMoveFrom.piece.description !== king) {
        throw new Error('do not call isLegalKingMove for a piece that is not a pawn')
    }

    const rankDiff = Math.abs(getRankDiff(squareToMoveFrom, squareToMoveTo));
    const fileDiff = Math.abs(getFileDiff(squareToMoveFrom.file, squareToMoveTo.file));

    if (!(
        (rankDiff === 1 && fileDiff === 0)
        || (rankDiff === 0 && fileDiff === 1))
    ) {
        console.log('king can move only one space in any direction')
        return false;
    }
    // NEEDS KING-CANNOT-MOVE-INTO-CHECK

    return true;
}

// const isKingMoveTargetUnderAttack = (targetSquare: { file: any; rank: number; }, kingColor: any) => {
//     // if (!square.piece) throw Error('no piece to test if attacked')
//     // if (square.piece.description !== king) throw Error('do not call isKingTargetUnderAttack for a square that does not have a king')

//     // Check for attacks along ranks, files, and diagonals
//     const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
//     for (let i = 0; i < directions.length; i++) {
//         let file = getX(targetSquare.file) + directions[i][0];
//         let rank = targetSquare.rank + directions[i][1];
//         let currentSquare = getSquare(getFile(file), rank);
//         if(!currentSquare) throw new Error('error getting current square');

//         while (file >= 1 && file < 9 && rank >= 1 && rank < 9) {
//             const testPiece = currentSquare.piece;
//             if (testPiece) {
//                 if (
//                     testPiece.color !== kingColor && 
//                     ((testPiece.description === 'rook' && (i < 4)) || 
//                     (testPiece.description === 'bishop' && (i >= 4)) ||
//                     testPiece.description === queen)) {
//                     return true;
//                 }
//                 break;
//             }
//             file += directions[i][0];
//             rank += directions[i][1];
//         }
//     }
// }
const isLegalBishopMove = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw Error('squareToMoveFrom must have a piece');
    if (squareToMoveFrom.piece.description !== bishop) {
        throw new Error('do not call isLegalBishopMove for a piece that is not a pawn')
    }

    const rankDiff = Math.abs(getRankDiff(squareToMoveFrom, squareToMoveTo));
    const fileDiff = Math.abs(getFileDiff(squareToMoveFrom.file, squareToMoveTo.file));

    if (rankDiff !== fileDiff) {
        console.log('bishop must move diagonally')
        return false;
    }
}
const isLegalKnightMove = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw Error('squareToMoveFrom must have a piece');
    if (squareToMoveFrom.piece.description !== knight) {
        throw new Error('do not call isLegalKnightMove for a piece that is not a pawn')
    }

    const rankDiff = Math.abs(getRankDiff(squareToMoveFrom, squareToMoveTo));
    const fileDiff = Math.abs(getFileDiff(squareToMoveFrom.file, squareToMoveTo.file));

    if (!(
        (fileDiff === 1 && rankDiff === 2)
        || (fileDiff === 2 && rankDiff === 1))
    ) {
        console.log('knight must move in L shape')
        return false;
    }

    return true;
}

const isLegalPawnMove = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw Error('squareToMoveFrom must have a piece');
    if (squareToMoveFrom.piece.description !== pawn) {
        throw new Error('do not call isLegalPawnMove for a piece that is not a pawn')
    }

    const rankDiff = getRankDiff(squareToMoveFrom, squareToMoveTo);

    if (rankDiff <= 0) {
        console.log('Pawn must move forward.')
        return false;
    }

    if (rankDiff > 2) {
        console.log('pawn cannot move more than 2 spaces')
        return false;
    }

    // console.log(`rankDiff: ${rankDiff}`)
    // console.debug(`squareToMoveFrom.rank: ${squareToMoveFrom.rank}`)
    // console.debug(`squareToMoveFrom.piece.startRank: ${squareToMoveFrom.piece.startRank}`)
    if (rankDiff === 2 && squareToMoveFrom.rank !== squareToMoveFrom.piece.startRank) {
        console.log('pawn can only make 2-space-move from starting position')
        return false
    }

    let fileDiff = Math.abs(getFileDiff(squareToMoveFrom.file, squareToMoveTo.file));

    // console.log(`fileDiff: ${fileDiff}`)
    if (fileDiff === 0 && squareToMoveTo.piece) {
        console.log('Pawn may only capture on the diagonal 1')
        // console.debug(`squareToMoveTo: ${JSON.stringify(squareToMoveTo)}`)
        // console.debug(`squareToMoveFrom: ${JSON.stringify(squareToMoveFrom)}`)
        // console.debug(`fileDiff`)
        return false;
    }

    // console.debug(`squareToMoveTo.piece: ${squareToMoveTo.piece}`)
    if (fileDiff === 1 && !squareToMoveTo.piece) {
        console.log('Pawn may only capture on the diagonal 2')
        // console.debug(`squareToMoveTo: ${JSON.stringify(squareToMoveTo)}`)
        // console.debug(`squareToMoveFrom: ${JSON.stringify(squareToMoveFrom)}`)
        // console.debug(`fileDiff`)
        return false;
    }
    // TODO -- EN PASSENT
    return true;
}


// const isCaptureMove = (squareToMoveFrom, squareToMoveTo) => {
//     return squareToMoveFrom.piece !== null && squareToMoveTo.piece !== null;
// }
// const pawnCanMoveTwoSpaces = (squareToMoveFrom: any) => { }
// const isCapture = (squareToMoveTo) => {
//     return squareToMoveTo.piece !== null;
// }


export default board;

const getPieceStartingSquare = (piece: Piece) => {
    return board.find(square => square.rank === piece.startRank
        && square.file === piece.startFile);
}

const getSquare = (file: string, rank: number): Square | undefined => {
    return board.find(square => square.file === file
        && square.rank === rank)
};
