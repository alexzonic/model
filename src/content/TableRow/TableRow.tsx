import React from 'react';
import './TableRow.scss';
import {Cell} from "../../domain/Dijkstra";
import {TableCell} from "../TableCell/TableCell";

interface Props {
    cells: Cell[];
}

export const TableRow: React.FC<Props> = ({cells}) => {
    return (
        <div className="tb-row">
            {cells.map((cell, idx) =>
                <TableCell
                    key={`${cell.id}_${idx}`}
                    id={cell.id}
                    value={cell.value}
                    active={false}
                />)}
        </div>
    );
};