import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    cell:{
        display: "inline",
    }
}))

interface Props {
    pressed?: Boolean
}

export const Cell = ({pressed = false}:Props) => {
    const classes = useStyles();
    return <p className={classes.cell}>cell {pressed && "!!"}</p>
}