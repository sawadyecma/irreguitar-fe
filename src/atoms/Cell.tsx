import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    cell:{
        display: "inline",
    }
}))

interface CellProps {
    pressed: Boolean
}

export const Cell = ({pressed}:CellProps) => {
    const classes = useStyles();
    return <p className={classes.cell}>cell {pressed && "!!"}</p>
}