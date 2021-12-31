import { GuitarBox } from './GuitarBox';

export default {
    title: 'GuitarBox',
    component: GuitarBox,
};

export const NonPressedGuitar = () => <GuitarBox 
    threads={[
        {
            thNum: 6
        },
        {
            thNum: 5
        },
        {
            thNum: 4
        },
        {
            thNum: 3
        },
        {
            thNum: 2
        },
        {
            thNum: 1
        },
    ]}
/>;