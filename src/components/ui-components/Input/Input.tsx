import React from "react";
import "./Input.css";

export interface Props {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    autofocus?: boolean;
    value?: string | number;
    defaultValue?: string| number;
    className?: string;
    size?: string;
    variant?: string;
};

const Input = ({
        onChange, 
        onBlur, 
        onFocus,
        type = "text", 
        placeholder, 
        autofocus = false, 
        value, 
        defaultValue, 
        className = "", 
        size = "", 
        variant = ""
    }: Props) => (
    <input 
    className={`${className} ${size} ${variant} input`}
    type={type}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    placeholder={placeholder}
    autoFocus={autofocus}
    value={value}
    defaultValue={defaultValue}
     />
);


export default Input;