import React from 'react';
import "./Button.css";

interface Props {
    value: string;
    onClick: () => void;
}

export const Button: React.FC<Props> = ({value, onClick}) => {
    return (
        <input className="root" type="button" value={value} onClick={onClick} />
    );
};