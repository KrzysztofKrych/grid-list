import React, { useState } from "react";
import Input from "../Input/Input";
import TooltipContainer from "../TooltipContainer/TooltipContainer";

export interface Props {
    text: string;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}
const EditableSpan = ({text, onBlur}: Props) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsEditMode(false);
        event.target.value && onBlur(event);
    }
    const handleClick = () => {
        setIsEditMode(true);
    }
    return (
        isEditMode ? 
        <Input autofocus onBlur={handleBlur} defaultValue={text}></Input> : 
        <TooltipContainer onlyOverflowed><span onClick={handleClick}>{text}</span></TooltipContainer>
    )
};

export default EditableSpan;
