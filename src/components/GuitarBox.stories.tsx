import { GuitarBox } from './GuitarBox';

export default {
    title: 'GuitarBox',
    component: GuitarBox,
};

export const NonPressedGuitar = () => <GuitarBox 
    threads={[
        {
            thNum: 1,
        },
        {
            thNum: 2,
        },
        {
            thNum: 3,
        },
        {
            thNum: 4,
        },
        {
            thNum: 5,
        },
        {
            thNum: 6,
        },

    ]}
/>;

export const F_PressedGuitar = () => <GuitarBox 
    threads={[
        {
            thNum: 1,
            markedFlets: [1],
        },
        {
            thNum: 2,
            markedFlets: [1],
        },        
        {
            thNum: 3,
            markedFlets: [2],
        },        
        {
            thNum: 4,
            markedFlets: [3],
        },
        {
            thNum: 5,
            markedFlets: [3],
        },
        {
            thNum: 6,
            markedFlets: [1],
        },
    ]}
/>;

export const MinorPentaScale = () => <GuitarBox 
    threads={[
        {
            thNum: 1,
            markedFlets: [5,8],
        },
        {
            thNum: 2,
            markedFlets: [5,8],
        },        
        {
            thNum: 3,
            markedFlets: [5,7],
        },        
        {
            thNum: 4,
            markedFlets: [5,7],
        },
        {
            thNum: 5,
            markedFlets: [5,7],
        },
        {
            thNum: 6,
            markedFlets: [5,8],
        },
    ]}
/>;