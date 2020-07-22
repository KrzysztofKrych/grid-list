import React, { ReactNode, ReactElement, CSSProperties } from "react";

export interface Props {
    children?: ReactNode | ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    as?: string;
}

const Grid = ({children, className, style, as = "div"}: Props) => (
    React.createElement(
        as,
        {
            className,
            style
        },
        children
    )
);

export default Grid;