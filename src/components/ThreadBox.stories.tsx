import { useState } from 'react';
import { ThreadBox } from './ThreadBox';

export default {
    title: 'ThreadBox',
    component: ThreadBox,
};

export const NotPressed = () => <ThreadBox markedFlets={[]}/>;
export const Pressed = () => <ThreadBox markedFlets={[3]}/>;
export const Opened = () => <ThreadBox markedFlets={[0]}/>;

export const SinglePressable = () => {
    const [pressedFlet, setPressedFlet] = useState<number|undefined>(undefined)
    
    const onClickHandler = (fletNum: number): void => {
        if(fletNum === pressedFlet){
            setPressedFlet(undefined)
            return
        }
        setPressedFlet(fletNum)
    }

    return <ThreadBox
        markedFlets={pressedFlet === undefined ? [] : [pressedFlet]}
        onClick={onClickHandler}
    />
}

export const MultiPressable = () => {
    const [pressedFlets, setPressedFlets] = useState<number[]>([])
    
    const onClickHandler = (fletNum: number): void => {
        if (pressedFlets.includes(fletNum)){
            setPressedFlets(pressedFlets.filter((f)=>f!==fletNum))
            return
        }
        
        setPressedFlets((d)=>[...d, fletNum])
    }

    return <ThreadBox
        markedFlets={pressedFlets}
        onClick={onClickHandler}
    />
}
