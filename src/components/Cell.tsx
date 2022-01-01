import { CELL_COLOR, CELL_HEIGHT, CELL_WEIGHT, CELL_WIDTH, PRESS_CIRCLE_RADIUS } from "../constants/cell";

interface Props {
    pressed?: Boolean
    onClick?: () => void
}

export const Cell = ({
    pressed = false,
    onClick = undefined
}:Props) => {

    const w = CELL_WIDTH;
    const h = CELL_HEIGHT;
    const sw = CELL_WEIGHT
    const sc = CELL_COLOR
    const circleRadius = PRESS_CIRCLE_RADIUS

    return (
        <svg width={w} height={h} onClick={onClick}>
            {/* 上横線 */}
            <line x1={0} y1={0} x2={w} y2={0} strokeWidth={sw} stroke={sc}/>
            {/* 下横線 */}
            <line x1={0} y1={h} x2={w} y2={h} strokeWidth={sw} stroke={sc}/>
            {/* 中縦線 */}
            <line x1={w/2} y1={0} x2={w/2} y2={h} strokeWidth={sw/2} stroke={sc}/>
            {pressed && 
                <circle cx={w/2} cy={h/2} r={circleRadius} strokeWidth={sw} stroke={sc} fill={sc}/>
            }
        </svg>
    )
}