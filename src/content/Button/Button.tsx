import React from 'react';
import "./Button.scss";

interface Props {
    value?: string;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<Props> = ({value, onClick, className}) => {
    return (
        <button className={`root-btn ${className}`} onClick={onClick}>{value}</button>
    );
};