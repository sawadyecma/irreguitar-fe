import { useState } from 'react';
import { ThreadBox } from './ThreadBox';

export default {
    title: 'ThreadBox',
    component: ThreadBox,
};

export const OctaveTheadPressed = () => <ThreadBox fletCnt={12} markedFlets={[3]}/>;
export const OctaveThreadOpened = () => <ThreadBox fletCnt={12} />;
export const OnePressableOctaveThread = () => {
    const [pressedFlet, setPressedFlet] = useState<number>(0)
    return <ThreadBox 
        fletCnt={12} 
        markedFlets={[pressedFlet]}
        onClick={(f)=>setPressedFlet(f)}
    />
}
