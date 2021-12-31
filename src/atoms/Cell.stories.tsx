import { Cell } from './Cell';

export default {
    title: 'Cell',
    component: Cell,
};

export const PressedCell = () => <Cell pressed/>;
export const NonPressedCell = () => <Cell/>;