import { useState } from 'react';
import { Cell } from './Cell';

export default {
    title: 'Cell',
    component: Cell,
};

export const PressedCell = () => <Cell pressed/>;
export const NonPressedCell = () => <Cell/>;

export const PressableCell = () => {

    const [pressed, setPressed] = useState<boolean>(false)

    return <Cell 
        pressed={pressed}
        onClick={()=>setPressed(!pressed)}
    />
};