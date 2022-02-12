import React from 'react';
import "./Button.scss";

interface Props {
    value: string;
    onClick: () => void;
}

export const Button: React.FC<Props> = ({value, onClick}) => {
    return (
        <div className="root-btn" onClick={onClick}>{value}</div>
    );
};