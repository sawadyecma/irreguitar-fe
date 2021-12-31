import { Cell } from './Cell';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Cell',
    component: Cell,
};

export const PressedCell = () => <Cell pressed={true}/>;