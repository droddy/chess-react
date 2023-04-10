import { FC } from 'react';
import { TroughProps } from '../types';

const MoveTrough: FC<TroughProps> = ({ moveHistory }) => {
    return (
        <>
            <td className={'trough'} key='rowSpanCell' rowSpan={8}>{moveHistory.map(
                move => {
                    return (<div key={`rowSpanDiv${move.fromSquare.file}${move.fromSquare.rank}-${move.toSquare.file}${move.toSquare.rank}`}> {move.fromSquare.file}{move.fromSquare.rank}-{move.toSquare.file}{move.toSquare.rank} </div>)
                }
            )}
            </td>
        </>
    )
};

export default MoveTrough;