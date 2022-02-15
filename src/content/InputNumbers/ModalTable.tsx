import React from 'react';
import {TableRow} from "../TableRow/TableRow";
import {createTable} from "../../domain/Dijkstra";
import {inputNumbersBlockMatrix} from "../../domain/InputNumbers";

interface Props {
    onClick: (value: string) => void;
    matrix: Array<string[]>;
}

export const ModalTable: React.FC<Props> = ({onClick, matrix}) => {
    const rows = createTable(matrix) 
    
    return (
        <div>
            {rows.map((row, index) => <TableRow key={index} onClick={onClick} cells={row.cells}/>)}
        </div>
    );
};