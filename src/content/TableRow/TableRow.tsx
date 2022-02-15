import React from 'react';
import './TableRow.scss';
import {Cell} from "../../domain/Dijkstra";
import {TableCell} from "../TableCell/TableCell";

interface Props {
    cells: Cell[];
    onClick?: (value: string) => void;
}

export const TableRow: React.FC<Props> = ({cells, onClick}) => {
    return (
        <div className="tb-row">
            {cells.map((cell, idx) =>
                <TableCell 
                    key={`${cell.id}_${idx}`}
                    id={cell.id}
                    value={cell.value}
                    active={false}
                    onClick ={onClick}
                />)}
        </div>
    );
};