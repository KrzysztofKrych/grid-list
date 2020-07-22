import React, { useRef, useState, ReactNode, ReactElement } from "react";
import Tooltip from "../Tooltip/Tooltip";

export interface Props {
    children: ReactNode | ReactElement;
    onlyOverflowed?: boolean;
}
const TooltipContainer = ({children, onlyOverflowed}: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div 
            className="overflow-text" 
            ref={ref} 
            onMouseEnter={() => setVisible(true)} 
            onMouseLeave={() => setVisible(false)}>
            {children}
            <Tooltip outerRef={ref} visible={visible} onlyOverflowed={onlyOverflowed}>{children}</Tooltip>
        </div>
    )
}

export default TooltipContainer;