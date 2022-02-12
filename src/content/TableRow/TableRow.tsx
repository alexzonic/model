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
            {cells.map(x => <TableCell id={x.id} value={x.value} active={false}/>)}
        </div>
    );
};