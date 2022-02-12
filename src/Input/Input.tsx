import React from 'react';
import './Input.scss'

interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string,
    className?: string
}

export const Input: React.FC<Props> = ({value, onChange, className, placeholder}) => {

    return (
        <input
            className={className}
            type="text"
            value={value}
            placeholder={placeholder}
            onInput={(e) => onChange(e.currentTarget.value)}
        />
    );
};