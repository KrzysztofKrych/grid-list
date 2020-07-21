import React from "react";

export interface Props {
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    autofocus?: boolean;
    value?: string | number;
    defaultValue?: string| number;
};

const Input = ({onClick, onBlur, type = "text", placeholder, autofocus = false, value, defaultValue}: Props) => (
    <input 
    type={type}
    onClick={onClick}
    onBlur={onBlur}
    placeholder={placeholder}
    autoFocus={autofocus}
    value={value}
    defaultValue={defaultValue} />
);


export default Input;