import React, { useState } from "react";
import Input from "../Input/Input";
import TooltipContainer from "../TooltipContainer/TooltipContainer";

export interface Props {
    text: string;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    disableDefaultText?: boolean;
    variant?: string;
    className?:string;
};

const EditableSpan = ({text, onBlur, disableDefaultText = false, variant = "", className=""}: Props) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsEditMode(false);
        onBlur(event);
    };

    const handleClick = () => {
        setIsEditMode(true);
    };

    return (
        isEditMode ? 
        <Input autofocus onBlur={handleBlur} defaultValue={!disableDefaultText ? text : ""}></Input> : 
        <TooltipContainer variant={variant} onlyOverflowed><span className={className} onClick={handleClick}>{text}</span></TooltipContainer>
    );
};

export default EditableSpan;
