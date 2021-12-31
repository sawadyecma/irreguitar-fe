import { ThreadBox } from './ThreadBox';

export default {
    title: 'ThreadBox',
    component: ThreadBox,
};

export const OctaveTheadPressed = () => <ThreadBox fletCnt={12} pressedFlet={3}/>;
export const OctaveThreadOpened = () => <ThreadBox fletCnt={12} />;