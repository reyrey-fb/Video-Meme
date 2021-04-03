import { useDrag } from 'react-dnd';

import DraggableBox from "../components/DraggableBox";
import { ItemTypes } from '../Types/ItemTypes';

const style = {
    position: 'absolute',
    width: '100%'
};
export const Box = ({ id, left, top, hideSourceOnDrag, word, active, index}) => {
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { id, left, top },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top]);
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>;
    }
    return (<div ref={drag} style={{...style, left, top }} >
                {active? 
                <DraggableBox word={word} left={left} top={top} index={index}/>
                :null}
		    </div>);
};