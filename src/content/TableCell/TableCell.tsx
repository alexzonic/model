import React from 'react';
import './TableCell.scss'

interface Props {
    id?: string;
    value: string;
    active: boolean
}

export const TableCell: React.FC<Props> = ({id, value, active}) => {
    return (
        <div key={id} className={`tb-cell ${active && 'tb-cell-active'} ${!id && 'tb-cell-headers'}`}>
            {value}
        </div>
    );
};