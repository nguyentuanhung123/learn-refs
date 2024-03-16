import React, {forwardRef, useImperativeHandle, useState} from "react";

const Child = forwardRef((props, ref) => {
    const [text, setText] = useState("Original Text");

    useImperativeHandle(ref, () => ({
        changeText(newText){
            setText(newText);
        }
    }));

    return(
        <p>{text}</p>
    )
});

export default Child;