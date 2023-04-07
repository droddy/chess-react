import { Board } from "./board-commands";
import { Team, PieceDescription, Rank, File } from "./enum";
import { Piece } from "./types";

export const Pieces: Piece[] =
    [
        { color: Team.black, description: PieceDescription.rook, symbol: '♜', startRank: Rank.eight, startFile: File.a }, { color: Team.black, description: PieceDescription.knight, symbol: '♞', startRank: Rank.eight, startFile: File.b }, { color: Team.black, description: PieceDescription.bishop, symbol: '♝', startRank: Rank.eight, startFile: File.c }, { color: Team.black, description: PieceDescription.king, symbol: '♚', startRank: Rank.eight, startFile: File.d }, { color: Team.black, description: PieceDescription.queen, symbol: '♛', startRank: Rank.eight, startFile: File.e }, { color: Team.black, description: PieceDescription.bishop, symbol: '♝', startRank: Rank.eight, startFile: File.f }, { color: Team.black, description: PieceDescription.knight, symbol: '♞', startRank: Rank.eight, startFile: File.g }, { color: Team.black, description: PieceDescription.rook, symbol: '♜', startRank: Rank.eight, startFile: File.h },
        { color: Team.black, description: PieceDescription.pawn, symbol: '♟︎', startRank: Rank.seven, startFile: File.a }, { color: Team.black, description: PieceDescription.pawn, symbol: '♟︎', startRank: Rank.seven, startFile: File.b }, { color: Team.black, description: PieceDescription.pawn, symbol: '♟︎', startRank: Rank.seven, startFile: File.c }, { color: Team.black, description: PieceDescription.pawn, symbol: '♟︎', startRank: Rank.seven, startFile: File.d }, { color: Team.black, description: PieceDescription.pawn, symbol: '♟︎', startRank: Rank.seven, startFile: File.e }, { color: Team.black, description: PieceDescription.pawn, symbol: '♟︎', startRank: Rank.seven, startFile: File.f }, { color: Team.black, description: PieceDescription.pawn, symbol: '♟︎', startRank: Rank.seven, startFile: File.g }, { color: Team.black, description: PieceDescription.pawn, symbol: '♟︎', startRank: Rank.seven, startFile: File.h },
        { color: Team.white, description: PieceDescription.pawn, symbol: '♙', startRank: Rank.two, startFile: File.a }, { color: Team.white, description: PieceDescription.pawn, symbol: '♙', startRank: Rank.two, startFile: File.b }, { color: Team.white, description: PieceDescription.pawn, symbol: '♙', startRank: Rank.two, startFile: File.c }, { color: Team.white, description: PieceDescription.pawn, symbol: '♙', startRank: Rank.two, startFile: File.d }, { color: Team.white, description: PieceDescription.pawn, symbol: '♙', startRank: Rank.two, startFile: File.e }, { color: Team.white, description: PieceDescription.pawn, symbol: '♙', startRank: Rank.two, startFile: File.f }, { color: Team.white, description: PieceDescription.pawn, symbol: '♙', startRank: Rank.two, startFile: File.g }, { color: Team.white, description: PieceDescription.pawn, symbol: '♙', startRank: Rank.two, startFile: File.h },
        { color: Team.white, description: PieceDescription.rook, symbol: '♖', startRank: Rank.one, startFile: File.a }, { color: Team.white, description: PieceDescription.knight, symbol: '♘', startRank: Rank.one, startFile: File.b }, { color: Team.white, description: PieceDescription.bishop, symbol: '♗', startRank: Rank.one, startFile: File.c }, { color: Team.white, description: PieceDescription.king, symbol: '♔', startRank: Rank.one, startFile: File.d }, { color: Team.white, description: PieceDescription.queen, symbol: '♕', startRank: Rank.one, startFile: File.e }, { color: Team.white, description: PieceDescription.bishop, symbol: '♗', startRank: Rank.one, startFile: File.f }, { color: Team.white, description: PieceDescription.knight, symbol: '♘', startRank: Rank.one, startFile: File.g }, { color: Team.white, description: PieceDescription.rook, symbol: '♖', startRank: Rank.one, startFile: File.h },
    ];

export const EmptyBoard: Board = [
    { color: Team.black, piece: undefined, rank: Rank.eight, file: File.a }, { color: Team.white, piece: undefined, rank: Rank.eight, file: File.b },
    { color: Team.black, piece: undefined, rank: Rank.eight, file: File.c }, { color: Team.white, piece: undefined, rank: Rank.eight, file: File.d },
    { color: Team.black, piece: undefined, rank: Rank.eight, file: File.e }, { color: Team.white, piece: undefined, rank: Rank.eight, file: File.f },
    { color: Team.black, piece: undefined, rank: Rank.eight, file: File.g }, { color: Team.white, piece: undefined, rank: Rank.eight, file: File.h },
    { color: Team.white, piece: undefined, rank: Rank.seven, file: File.a }, { color: Team.black, piece: undefined, rank: Rank.seven, file: File.b },
    { color: Team.white, piece: undefined, rank: Rank.seven, file: File.c }, { color: Team.black, piece: undefined, rank: Rank.seven, file: File.d },
    { color: Team.white, piece: undefined, rank: Rank.seven, file: File.e }, { color: Team.black, piece: undefined, rank: Rank.seven, file: File.f },
    { color: Team.white, piece: undefined, rank: Rank.seven, file: File.g }, { color: Team.black, piece: undefined, rank: Rank.seven, file: File.h },
    { color: Team.black, piece: undefined, rank: Rank.six, file: File.a }, { color: Team.white, piece: undefined, rank: Rank.six, file: File.b },
    { color: Team.black, piece: undefined, rank: Rank.six, file: File.c }, { color: Team.white, piece: undefined, rank: Rank.six, file: File.d },
    { color: Team.black, piece: undefined, rank: Rank.six, file: File.e }, { color: Team.white, piece: undefined, rank: Rank.six, file: File.f },
    { color: Team.black, piece: undefined, rank: Rank.six, file: File.g }, { color: Team.white, piece: undefined, rank: Rank.six, file: File.h },
    { color: Team.white, piece: undefined, rank: Rank.five, file: File.a }, { color: Team.black, piece: undefined, rank: Rank.five, file: File.b },
    { color: Team.white, piece: undefined, rank: Rank.five, file: File.c }, { color: Team.black, piece: undefined, rank: Rank.five, file: File.d },
    { color: Team.white, piece: undefined, rank: Rank.five, file: File.e }, { color: Team.black, piece: undefined, rank: Rank.five, file: File.f },
    { color: Team.white, piece: undefined, rank: Rank.five, file: File.g }, { color: Team.black, piece: undefined, rank: Rank.five, file: File.h },
    { color: Team.black, piece: undefined, rank: Rank.four, file: File.a }, { color: Team.white, piece: undefined, rank: Rank.four, file: File.b },
    { color: Team.black, piece: undefined, rank: Rank.four, file: File.c }, { color: Team.white, piece: undefined, rank: Rank.four, file: File.d },
    { color: Team.black, piece: undefined, rank: Rank.four, file: File.e }, { color: Team.white, piece: undefined, rank: Rank.four, file: File.f },
    { color: Team.black, piece: undefined, rank: Rank.four, file: File.g }, { color: Team.white, piece: undefined, rank: Rank.four, file: File.h },
    { color: Team.white, piece: undefined, rank: Rank.three, file: File.a }, { color: Team.black, piece: undefined, rank: Rank.three, file: File.b },
    { color: Team.white, piece: undefined, rank: Rank.three, file: File.c }, { color: Team.black, piece: undefined, rank: Rank.three, file: File.d },
    { color: Team.white, piece: undefined, rank: Rank.three, file: File.e }, { color: Team.black, piece: undefined, rank: Rank.three, file: File.f },
    { color: Team.white, piece: undefined, rank: Rank.three, file: File.g }, { color: Team.black, piece: undefined, rank: Rank.three, file: File.h },
    { color: Team.black, piece: undefined, rank: Rank.two, file: File.a }, { color: Team.white, piece: undefined, rank: Rank.two, file: File.b },
    { color: Team.black, piece: undefined, rank: Rank.two, file: File.c }, { color: Team.white, piece: undefined, rank: Rank.two, file: File.d },
    { color: Team.black, piece: undefined, rank: Rank.two, file: File.e }, { color: Team.white, piece: undefined, rank: Rank.two, file: File.f },
    { color: Team.black, piece: undefined, rank: Rank.two, file: File.g }, { color: Team.white, piece: undefined, rank: Rank.two, file: File.h },
    { color: Team.white, piece: undefined, rank: Rank.one, file: File.a }, { color: Team.black, piece: undefined, rank: Rank.one, file: File.b },
    { color: Team.white, piece: undefined, rank: Rank.one, file: File.c }, { color: Team.black, piece: undefined, rank: Rank.one, file: File.d },
    { color: Team.white, piece: undefined, rank: Rank.one, file: File.e }, { color: Team.black, piece: undefined, rank: Rank.one, file: File.f },
    { color: Team.white, piece: undefined, rank: Rank.one, file: File.g }, { color: Team.black, piece: undefined, rank: Rank.one, file: File.h }
];
