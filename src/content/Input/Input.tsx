import React from 'react';
import './Input.scss'

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({value, onChange}) => {

    return (
        <input
            className="root"
            type="text"
            value={value}
            onInput={(e) => onChange(e.currentTarget.value)}
        />
    );
};