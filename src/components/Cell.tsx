// import { makeStyles } from "@material-ui/core"

// const useStyles = makeStyles((theme) => ({
//     cell:{
//         display: "inline",
//     }
// }))

interface Props {
    pressed?: Boolean
}

export const Cell = ({pressed = false}:Props) => {
    // const classes = useStyles();
    const w = 24*2;
    const h = 24*2;
    const sw = 3
    const sc = "rgb(0,0,0)"
    const circleRate = 0.5
    const circleLen = w * circleRate/2
    // return <p className={classes.cell}>cell {pressed && "!!"}</p>
    return (
        <svg width={w} height={h}>
            <line x1={0} y1={0} x2={w} y2={0} strokeWidth={sw} stroke={sc}/>
            <line x1={0} y1={h} x2={w} y2={h} strokeWidth={sw} stroke={sc}/>
            <line x1={w/2} y1={0} x2={w/2} y2={h} strokeWidth={sw/2} stroke={sc}/>
            {pressed && 
                <circle cx={w/2} cy={h/2} r={circleLen} strokeWidth={sw} stroke={sc} fill={sc}/>
            }
        </svg>
    )
}