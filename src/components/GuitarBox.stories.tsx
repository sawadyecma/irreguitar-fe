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
            pressedFlet: 1,
        },
        {
            thNum: 2,
            pressedFlet: 1,
        },        
        {
            thNum: 3,
            pressedFlet: 2,
        },        
        {
            thNum: 4,
            pressedFlet: 3,
        },
        {
            thNum: 5,
            pressedFlet: 3,
        },
        {
            thNum: 6,
            pressedFlet: 1,
        },
    ]}
/>;