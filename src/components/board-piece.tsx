import { FC } from 'react';
import { PieceProps } from '../types';

const BoardPiece: FC<PieceProps> = ({ className, symbol }) => {
    return (<>
        <span
            className={`App-symbol ${className}`} draggable="true">{symbol}</span>
    </>)
}

export default BoardPiece