import React, { ReactNode, ReactElement, CSSProperties } from "react";
import "./Button.css";

export interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: ReactNode | ReactElement;
    style?: CSSProperties;
    variant?: string;
    className?: string;
    disabled?: boolean;
};

const Button = ({onClick, children, style, variant = "", className = "", disabled}: Props) => (
    <button 
        className={`button ${className} ${variant} ${disabled?'disabled':''}`}
        onClick={onClick} style={style}>{children}</button>
);

export default Button;