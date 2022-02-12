﻿import React from 'react';
import {Input} from "./content/Input/Input";
import {Button} from "./content/Button/Button";
import {DijkstraTable} from "./content/DijkstraTable/DijkstraTable";

interface Props {

}

export const Component: React.FC<Props> = ({}) => {
    const [infix, setInfix] = React.useState('');

    return (
        <>
            <Input value={infix} onChange={setInfix}/>
            <Button value={'123'} onClick={() => {
            }}/>
            <DijkstraTable/>
        </>
    );
};