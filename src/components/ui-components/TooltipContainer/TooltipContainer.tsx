import React, { useRef, useState, ReactNode, ReactElement } from "react";
import Tooltip from "../Tooltip/Tooltip";
import "./TooltipContainer.css"

export interface Props {
    children: ReactNode | ReactElement;
    onlyOverflowed?: boolean;
    variant?: string;
};

const TooltipContainer = ({children, onlyOverflowed, variant}: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div 
            className={`tooltip-container overflow-text ${variant}`} 
            ref={ref} 
            onMouseEnter={() => setVisible(true)} 
            onMouseLeave={() => setVisible(false)}>
            {children}
            <Tooltip outerRef={ref} visible={visible} onlyOverflowed={onlyOverflowed}>{children}</Tooltip>
        </div>
    );
};

export default TooltipContainer;