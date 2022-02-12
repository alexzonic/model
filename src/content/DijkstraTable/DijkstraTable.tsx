import React from 'react';
import {createTable} from "../../domain/Dijkstra";
import { TableRow } from '../TableRow/TableRow';

interface Props {

}

export const DijkstraTable: React.FC<Props> = ({}) => {
    const tableValues = (createTable() || []);

    return (
        <>
            {tableValues.map((row) => <TableRow cells={row.cells}/>)}
        </>
    );
};