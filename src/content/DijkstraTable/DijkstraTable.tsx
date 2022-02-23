import React from 'react';
import {createTable, dijkstraMatrix} from "../../domain/Dijkstra";
import {TableRow} from '../TableRow/TableRow';

interface Props {
    className?: string
}

export const DijkstraTable: React.FC<Props> = ({className}) => {
    const tableValues = (createTable(dijkstraMatrix) || []);

    return (
        <div className={className}>
            {tableValues.map((row, idx) => <TableRow key={idx} cells={row.cells} width={440}/>)}
        </div>
    );
};