import React from 'react';
import {Input} from "./Input/Input";

interface Props {

}

export const Component: React.FC<Props> = ({}) => {
    const [infix, setInfix] = React.useState('');
    
    return (
        <>
            <Input value={infix} onChange={setInfix} />
        </>
    );
};