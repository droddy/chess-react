import { File, PieceDescription, Rank, Team } from "./enum";
import { Pieces } from "./constants";
import { Board, Square, Piece } from "./types";

const getNewBoard = () => {
    const pieces = [...Pieces];

    const initBoard: Board = [];
    let i = 1;
    let j: number;

    for (j = 8; j >= 1; j--) {
        let currentFile: keyof typeof File;
        for (currentFile in File) {
            let k = i + j;

            initBoard.push({ color: k % 2 === 0 ? Team.white : Team.black, rank: j, file: File[currentFile] });
            i++;
        }
    };

    /* #region */
    // const initBoard: Board = [
    //     { color: Team.black, piece: undefined, rank: Rank.eight, file: File.a }, { color: Team.white, piece: undefined, rank: Rank.eight, file: File.b },
    //     { color: Team.black, piece: undefined, rank: Rank.eight, file: File.c }, { color: Team.white, piece: undefined, rank: Rank.eight, file: File.d },
    //     { color: Team.black, piece: undefined, rank: Rank.eight, file: File.e }, { color: Team.white, piece: undefined, rank: Rank.eight, file: File.f },
    //     { color: Team.black, piece: undefined, rank: Rank.eight, file: File.g }, { color: Team.white, piece: undefined, rank: Rank.eight, file: File.h },
    //     { color: Team.white, piece: undefined, rank: Rank.seven, file: File.a }, { color: Team.black, piece: undefined, rank: Rank.seven, file: File.b },
    //     { color: Team.white, piece: undefined, rank: Rank.seven, file: File.c }, { color: Team.black, piece: undefined, rank: Rank.seven, file: File.d },
    //     { color: Team.white, piece: undefined, rank: Rank.seven, file: File.e }, { color: Team.black, piece: undefined, rank: Rank.seven, file: File.f },
    //     { color: Team.white, piece: undefined, rank: Rank.seven, file: File.g }, { color: Team.black, piece: undefined, rank: Rank.seven, file: File.h },
    //     { color: Team.black, piece: undefined, rank: Rank.six, file: File.a }, { color: Team.white, piece: undefined, rank: Rank.six, file: File.b },
    //     { color: Team.black, piece: undefined, rank: Rank.six, file: File.c }, { color: Team.white, piece: undefined, rank: Rank.six, file: File.d },
    //     { color: Team.black, piece: undefined, rank: Rank.six, file: File.e }, { color: Team.white, piece: undefined, rank: Rank.six, file: File.f },
    //     { color: Team.black, piece: undefined, rank: Rank.six, file: File.g }, { color: Team.white, piece: undefined, rank: Rank.six, file: File.h },
    //     { color: Team.white, piece: undefined, rank: Rank.five, file: File.a }, { color: Team.black, piece: undefined, rank: Rank.five, file: File.b },
    //     { color: Team.white, piece: undefined, rank: Rank.five, file: File.c }, { color: Team.black, piece: undefined, rank: Rank.five, file: File.d },
    //     { color: Team.white, piece: undefined, rank: Rank.five, file: File.e }, { color: Team.black, piece: undefined, rank: Rank.five, file: File.f },
    //     { color: Team.white, piece: undefined, rank: Rank.five, file: File.g }, { color: Team.black, piece: undefined, rank: Rank.five, file: File.h },
    //     { color: Team.black, piece: undefined, rank: Rank.four, file: File.a }, { color: Team.white, piece: undefined, rank: Rank.four, file: File.b },
    //     { color: Team.black, piece: undefined, rank: Rank.four, file: File.c }, { color: Team.white, piece: undefined, rank: Rank.four, file: File.d },
    //     { color: Team.black, piece: undefined, rank: Rank.four, file: File.e }, { color: Team.white, piece: undefined, rank: Rank.four, file: File.f },
    //     { color: Team.black, piece: undefined, rank: Rank.four, file: File.g }, { color: Team.white, piece: undefined, rank: Rank.four, file: File.h },
    //     { color: Team.white, piece: undefined, rank: Rank.three, file: File.a }, { color: Team.black, piece: undefined, rank: Rank.three, file: File.b },
    //     { color: Team.white, piece: undefined, rank: Rank.three, file: File.c }, { color: Team.black, piece: undefined, rank: Rank.three, file: File.d },
    //     { color: Team.white, piece: undefined, rank: Rank.three, file: File.e }, { color: Team.black, piece: undefined, rank: Rank.three, file: File.f },
    //     { color: Team.white, piece: undefined, rank: Rank.three, file: File.g }, { color: Team.black, piece: undefined, rank: Rank.three, file: File.h },
    //     { color: Team.black, piece: undefined, rank: Rank.two, file: File.a }, { color: Team.white, piece: undefined, rank: Rank.two, file: File.b },
    //     { color: Team.black, piece: undefined, rank: Rank.two, file: File.c }, { color: Team.white, piece: undefined, rank: Rank.two, file: File.d },
    //     { color: Team.black, piece: undefined, rank: Rank.two, file: File.e }, { color: Team.white, piece: undefined, rank: Rank.two, file: File.f },
    //     { color: Team.black, piece: undefined, rank: Rank.two, file: File.g }, { color: Team.white, piece: undefined, rank: Rank.two, file: File.h },
    //     { color: Team.white, piece: undefined, rank: Rank.one, file: File.a }, { color: Team.black, piece: undefined, rank: Rank.one, file: File.b },
    //     { color: Team.white, piece: undefined, rank: Rank.one, file: File.c }, { color: Team.black, piece: undefined, rank: Rank.one, file: File.d },
    //     { color: Team.white, piece: undefined, rank: Rank.one, file: File.e }, { color: Team.black, piece: undefined, rank: Rank.one, file: File.f },
    //     { color: Team.white, piece: undefined, rank: Rank.one, file: File.g }, { color: Team.black, piece: undefined, rank: Rank.one, file: File.h }
    // ];
    /* #endregion */

    pieces.forEach(piece => {
        let foundStartSquare = getPieceStartingSquare(piece, initBoard);
        if (!!foundStartSquare) foundStartSquare.piece = piece;
    });

    return initBoard;
};
const numToFile = (x: number) => {
    // const charCode = x+97;
    // if (charCode < 97 || charCode > 104)
    //     throw new Error('numToFile: file indexing is out of whack')

        
    // return String.fromCharCode(charCode);
    switch (x) {
        case 0: { return File.a; }
        case 1: { return File.b; }
        case 2: { return File.c; }
        case 3: { return File.d; }
        case 4: { return File.e; }
        case 5: { return File.f; }
        case 6: { return File.g; }
        case 7: { return File.h; }
    }
    throw new Error('cannot match a number to a file')
};
const fileToNum = (file: File) => {
    const num = (file.charCodeAt(0) - 97);
    if (num < 0 || num > 7) throw new Error('fileToNum: file indexing is out of whack')
    return (file.charCodeAt(0) - 97);
};

const getFileDiff = (fromFile: File, toFile: File) => {
    const fromNum = fileToNum(fromFile);
    const toNum = fileToNum(toFile);
    /* #region console.debug */
    // console.debug(`squareToMoveFrom.file: ${squareToMoveFrom.file}`)
    // console.debug(`squareToMoveTo.file: ${squareToMoveTo.file}`)
    // console.debug(`fromNum: ${fromNum}`)
    // console.debug(`toNum: ${toNum}`)
    /* #endregion */
    return fromNum - toNum;
};
const getRankDiff = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw new Error('there must be a piece in the squareToMoveFrom');
    return squareToMoveFrom.piece.color === Team.black
        ? squareToMoveFrom.rank - squareToMoveTo.rank
        : squareToMoveTo.rank - squareToMoveFrom.rank;
    // DO NOT DO THIS
    // we need negatives for pawns to be restricted to forward moves only
    // ...and some pieces can move backward so we need to know when that is the case
};
const isMoveBlocked = (squareToMoveFrom: Square, squareToMoveTo: Square, board: Board) => {
    if (!squareToMoveFrom.piece) throw new Error('squareToMoveFrom must have a piece in it')
    /* #region console.debug */
    // console.log(`from ${squareToMoveFrom.file}${squareToMoveFrom.rank} to ${squareToMoveTo.file}${squareToMoveTo.rank}`)
    // Check for any pieces between start and end squares

    /* #endregion */
    if (squareToMoveFrom.piece.description === PieceDescription.knight) return false;

    const [startRank, startFileX] = [squareToMoveFrom.rank, fileToNum(squareToMoveFrom.file)];
    const [endRank, endFileX] = [squareToMoveTo.rank, fileToNum(squareToMoveTo.file)];
    const deltaRank = Math.sign(endRank - startRank);
    const deltaFile = Math.sign(endFileX - startFileX);
    let currentRank = startRank + deltaRank;
    let currentFileX = startFileX + deltaFile;
    /* #region console.debug */
    // console.debug(`currentRank: ${currentRank}`)
    // console.debug(`currentFileX: ${currentFileX}`)
    // console.debug(`deltaRank: ${deltaRank}`)
    // console.debug(`deltaFile: ${deltaFile}`)
    /* #endregion */
    while (currentRank !== endRank || currentFileX !== endFileX) {
        const currentFile = numToFile(currentFileX);
        /* #region console.debug */
        // console.debug(`currentFile: ${currentFile}`)
        // console.debug(`checking for blocked move at x,y - ${currentFileX},${currentRank}`)
        /* #endregion */

        let currentSquare = getSquare(currentFile, currentRank, board);
        if (currentSquare && currentSquare.piece !== undefined) {
            console.log(`found piece blocking at ${currentSquare.file}${currentSquare.rank}, ${currentSquare.piece}`)
            return true;
        }
        currentRank += deltaRank;
        currentFileX += deltaFile;
    }
    return false;
};
const isMoveTeamTurn = (moveTeam: Team, currentTurnTeam: Team) => {
    let result = moveTeam === currentTurnTeam;
    if (!result) console.log(`It is not ${moveTeam}'s turn.`);
    return result;
}
const isLegalKingMove = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw new Error('there must be a piece in the squareToMoveFrom');
    if (squareToMoveFrom.piece.description !== PieceDescription.king) {
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
};

/* #region isKingMoveTargetUnderAttack */
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
/* #endregion */

const isLegalBishopMove = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw Error('squareToMoveFrom must have a piece');
    if (squareToMoveFrom.piece.description !== PieceDescription.bishop) {
        throw new Error('do not call isLegalBishopMove for a piece that is not a pawn')
    }

    const rankDiff = Math.abs(getRankDiff(squareToMoveFrom, squareToMoveTo));
    const fileDiff = Math.abs(getFileDiff(squareToMoveFrom.file, squareToMoveTo.file));

    if (rankDiff !== fileDiff) {
        console.log('bishop must move diagonally')
        return false;
    }
};
const isLegalKnightMove = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw Error('squareToMoveFrom must have a piece');
    if (squareToMoveFrom.piece.description !== PieceDescription.knight) {
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
};
const isLegalPawnMove = (squareToMoveFrom: Square, squareToMoveTo: Square) => {
    if (!squareToMoveFrom.piece) throw Error('squareToMoveFrom must have a piece');
    if (squareToMoveFrom.piece.description !== PieceDescription.pawn) {
        throw new Error('do not call isLegalPawnMove for a piece that is not a pawn')
    }

    const rankDiff = getRankDiff(squareToMoveFrom, squareToMoveTo);

    if (rankDiff <= 0) {
        console.log('Pawn must move forward.');
        return false;
    }

    if (rankDiff > 2) {
        console.log('pawn cannot move more than 2 spaces');
        return false;
    }

    /* #region console.debug */
    // console.log(`rankDiff: ${rankDiff}`)
    // console.debug(`squareToMoveFrom.rank: ${squareToMoveFrom.rank}`)
    // console.debug(`squareToMoveFrom.piece.startRank: ${squareToMoveFrom.piece.startRank}`)
    /* #endregion */
    if (rankDiff === 2 && squareToMoveFrom.rank !== squareToMoveFrom.piece.startRank) {
        console.log('pawn can only make 2-space-move from starting position')
        return false
    }

    const fileDiff = Math.abs(getFileDiff(squareToMoveFrom.file, squareToMoveTo.file));

    // console.log(`fileDiff: ${fileDiff}`)
    if (fileDiff === 0 && squareToMoveTo.piece) {
        console.log('Pawn may only capture on the diagonal 1')
        /* #region console.debug */
        // console.debug(`squareToMoveTo: ${JSON.stringify(squareToMoveTo)}`)
        // console.debug(`squareToMoveFrom: ${JSON.stringify(squareToMoveFrom)}`)
        // console.debug(`fileDiff`)
        /* #endregion */
        return false;
    }

    // console.debug(`squareToMoveTo.piece: ${squareToMoveTo.piece}`)
    if (fileDiff === 1 && !squareToMoveTo.piece) {
        console.log('Pawn may only capture on the diagonal 2')
        /* #region console.debug */
        // console.debug(`squareToMoveTo: ${JSON.stringify(squareToMoveTo)}`)
        // console.debug(`squareToMoveFrom: ${JSON.stringify(squareToMoveFrom)}`)
        // console.debug(`fileDiff`)
        /* #endregion */
        return false;
    }
    // TODO -- EN PASSENT
    return true;
};
const getPieceStartingSquare = (piece: Piece, board: Board) => {
    return board.find(square => square.rank === piece.startRank
        && square.file === piece.startFile);
};
const getSquare = (file: File, rank: Rank, board: Board): Square | undefined => {
    return board.find(square => square.file === file
        && square.rank === rank);
};

// const isCaptureMove = (squareToMoveFrom, squareToMoveTo) => {
//     return squareToMoveFrom.piece !== null && squareToMoveTo.piece !== null;
// }
// const pawnCanMoveTwoSpaces = (squareToMoveFrom: any) => { }
// const isCapture = (squareToMoveTo) => {
//     return squareToMoveTo.piece !== null;
// }

const movePiece = (fromFile: File, fromRank: Rank, toFile: File, toRank: Rank, board: Board, currentTeam: Team): Board | undefined => {
    console.log(`board-commands -- request to move ${fromFile}${fromRank} to ${toFile}${toRank}`);

    const squareToMoveFrom = getSquare(fromFile, fromRank, board);
    if (!squareToMoveFrom) throw new Error('cannot determine squareToMoveFrom');

    if (!squareToMoveFrom.piece) return undefined;

    const pieceToMove = squareToMoveFrom.piece;
    // console.debug(pieceToMove);
    // NOT COVERED
    if (!pieceToMove.color) {
        console.log('invalid piece');
        return undefined;
    }

    if (!isMoveTeamTurn(pieceToMove.color, currentTeam)) return undefined;

    const squareToMoveTo = getSquare(toFile, toRank, board);
    if (!squareToMoveTo) throw new Error('cannot determine squareToMoveTo');

    const isCapturingSelf = pieceToMove.color === squareToMoveTo.piece?.color;

    if (isCapturingSelf) {
        console.log('No piece can capture a piece on the same team');
        return undefined;
    }

    if (pieceToMove.description === PieceDescription.pawn && !isLegalPawnMove(squareToMoveFrom, squareToMoveTo)) return undefined;
    if (pieceToMove.description === PieceDescription.knight && !isLegalKnightMove(squareToMoveFrom, squareToMoveTo)) return undefined;
    if (pieceToMove.description === PieceDescription.bishop && !isLegalBishopMove(squareToMoveFrom, squareToMoveTo)) return undefined;
    if (pieceToMove.description === PieceDescription.king && !isLegalKingMove(squareToMoveFrom, squareToMoveTo)) return undefined;

    // NEEDS TEAM CANNOT PUT OWN KING INTO CHECK

    // DON'T PUT THIS BEFORE THESE ^^^ OR ALL HELL BREAKS LOOSE
    if (isMoveBlocked(squareToMoveFrom, squareToMoveTo, board)) return undefined;
    // DON'T PUT ^^^ BEFORE THOSE ^^^ OR ALL HELL BREAKS LOOSE
    console.debug(`pieceToMove: ${JSON.stringify(pieceToMove)}`);
    squareToMoveTo.piece = pieceToMove;
    squareToMoveFrom.piece = undefined;
    return board;
};

export { getNewBoard, movePiece }; 
