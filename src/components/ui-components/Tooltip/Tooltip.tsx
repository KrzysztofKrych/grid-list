import React, { ReactNode, ReactElement, RefObject, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./Tooltip.css";

export interface Props {
    children: ReactNode | ReactElement;
    outerRef: RefObject<HTMLElement>;
    visible: boolean;
    onlyOverflowed?: boolean;
}


const Tooltip = ({children, outerRef, visible, onlyOverflowed}: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const isChildrenOverflowedParent = () => {
        if(outerRef.current && ref.current && onlyOverflowed){
            const isOverflowed = ref.current.clientWidth >= outerRef.current.clientWidth;
            return isOverflowed && visible ? 'visible' : '';
        }
        return visible ? 'visible' : '';
    }

    useEffect(() => {
        if(outerRef.current && ref.current){
            const target = outerRef.current.getBoundingClientRect();
            ref.current.style.left = `${target.left}px`;
            ref.current.style.top = `${target.top}px`;
        }
    }, [outerRef, visible]);
    
    const root = <div ref={ref} className={`tooltip ${isChildrenOverflowedParent()}`}>{children}</div>;
    return (
        ReactDOM.createPortal(root, document.body)
    );
};


export default Tooltip;