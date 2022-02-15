import React from 'react';
import './TableCell.scss'

interface Props {
    id?: string;
    value: string;
    active: boolean;
    onClick?: (value: string) => void;
}

export const TableCell: React.FC<Props> = ({id, value, active, onClick}) => {
    return (
        <div 
            key={id}
            className={`tb-cell ${active && 'tb-cell-active'} ${!id && !onClick && 'tb-cell-headers'} ${onClick && 'tb-cell-inputs'}`}
            onClick={() => value && onClick && onClick(value)}
        >
            {value}
        </div>
    );
};