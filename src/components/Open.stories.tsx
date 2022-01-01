import { useState } from 'react';
import { Open } from './Open';

export default {
    title: 'Open',
    component: Open,
};

export const PressedOpen = () => <Open marked/>;
export const NonPressedOpen = () => <Open/>;

export const PressableOpen = () => {

    const [marked, setMarked] = useState<boolean>(false)

    return <Open 
        marked={marked}
        onClick={()=>setMarked(!marked)}
    />
};