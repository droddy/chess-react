import { PieceDescription, Rank, Team, File } from './enum';

export type Piece = { color?: Team; description?: PieceDescription; symbol?: string; startRank: Rank; startFile: File; };
export type Square = { color: Team, piece?: Piece, rank: Rank, file: File };
export type Board = Square[];
