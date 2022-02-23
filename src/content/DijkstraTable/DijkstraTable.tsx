import React from 'react';
import {createTable, dijkstraMatrix} from "../../domain/Dijkstra";
import {TableRow} from '../TableRow/TableRow';

interface Props {
    activeCellTopIndex: number;
    activeCellLeftIndex: number;
    className?: string
}

export const DijkstraTable: React.FC<Props> = ({className, activeCellTopIndex, activeCellLeftIndex}) => {
    const tableValues = (createTable(dijkstraMatrix) || []);

    // debugger
    const activeCellId = `${dijkstraMatrix[0][activeCellLeftIndex]}_${dijkstraMatrix[activeCellLeftIndex][0]}_${activeCellTopIndex}`;

    return (
        <div className={className}>
            {tableValues.map((row, idx) => <TableRow
                key={idx}
                cells={row.cells}
                width={440}
                activeCellId={activeCellId}
            />)}
        </div>
    );
};