import { useState } from 'react';
import { ThreadBox } from './ThreadBox';

export default {
    title: 'ThreadBox',
    component: ThreadBox,
};

export const OctaveTheadPressed = () => <ThreadBox fletCnt={12} pressedFlet={3}/>;
export const OctaveThreadOpened = () => <ThreadBox fletCnt={12} />;
export const PressableOctaveThread = () => {
    const [pressedFlet, setPressedFlet] = useState<number|undefined>(undefined)
    return <ThreadBox 
        fletCnt={12} 
        pressedFlet={pressedFlet}
        onClick={(f)=>setPressedFlet(f)}
    />
}
