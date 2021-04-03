import React, {useState} from "react";

import "./DraggableBox.css";

const DraggableBox = ({word, left, top, index}) => {
   
    //color state management
    const [color, setColor] = useState("dark");
    const [colorIndex, setColorIndex] = useState({[word] : 0 });

    /**
    * function that cycles through button colors on each click
    */
    const changeColor = () => {
        const colorArray = ["red", "blue", "green", "yellow", "white"];
        
        (colorIndex[word] < colorArray.length -1) ? 
            setColorIndex({
                ...colorIndex, 
                [word] : colorIndex[word] + 1
                }) :
            setColorIndex({
                ...colorIndex, 
                [word] : 0
            })
            setColor(colorArray[colorIndex[word]])
        }

    return (
        <>
            <button
                key={index}
                type="button" 
                className={`target btn btn-sm btn-${color} rounded drag-me-group`} 
                data-toggle="tooltip" 
                data-placement="bottom"
                title={`{ x: ${left}px | y: ${top}px }`}
                onClick={changeColor}
                >
                {word}
            </button>
        </>
    )
}

export default DraggableBox;