import React, { ReactNode, ReactElement, CSSProperties } from "react";

export interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: ReactNode | ReactElement;
    style?: CSSProperties;
    primary?: boolean;
    className?: string;
}

const Button = ({onClick, children, style, primary, className}: Props) => (
    <button 
        className={`${className} ${primary?'prmiary':''}`}
        onClick={onClick} style={style}>{children}</button>
);

export default Button;