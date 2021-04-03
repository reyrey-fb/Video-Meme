import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Types/ItemTypes';
import { Box } from './Box';
import update from 'immutability-helper';
import ReactPlayer from 'react-player';

import { VIDEO_URL } from "../Types/ItemTypes"

export const Container = ({ hideSourceOnDrag, active, words }) => {

    const [boxes, setBoxes] = useState({
        a: { top: 50, left: 200, index: 0},
        b: { top: 10, left: 100, index: 1},
        c: { top: 100, left: 10, index: 2},
        d: { top: 200, left: 50, index: 3},
        e: { top: 200, left: 200, index: 4}  
    });

    const moveBox = useCallback((id, left, top) => {
        setBoxes(update(boxes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [boxes, setBoxes]);
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveBox(item.id, left, top);
            return undefined;
        },
    }), [moveBox]);

    return (<div ref={drop} >
            <ReactPlayer
                  className = "react-player" 
                  url = {VIDEO_URL}
                  playing = {true}
                  loop = {true}
                  controls = {true}
                  width = '100%'
                  height = '100%'
                />

        {Object.keys(boxes).map((key) => {     
        const { left, top, index } = boxes[key];
        return (<Box key={key} id={key} left={left} top={top} hideSourceOnDrag={hideSourceOnDrag} word={words[index]} active={active[index]} index={index}>
                </Box>)                 
    })}
		</div>);
};