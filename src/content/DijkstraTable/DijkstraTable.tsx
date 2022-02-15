import React from 'react';
import {createTable, dijkstraMatrix} from "../../domain/Dijkstra";
import {TableRow} from '../TableRow/TableRow';

interface Props {

}

export const DijkstraTable: React.FC<Props> = ({}) => {
    const tableValues = (createTable(dijkstraMatrix) || []);

    return (
        <>
            {tableValues.map((row, idx) => <TableRow key={idx} cells={row.cells}/>)}
        </>
    );
};