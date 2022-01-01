import { CELL_HEIGHT, CELL_WEIGHT } from "../constants/cell";
import { Thread } from "../types/thread";
import { ThreadBox } from "./ThreadBox"

interface Props {
    threads: Thread[]
    fletCnt?: number
    onClick?: (thNum: number, flet: number) => void
}

export const GuitarBox = ({
    threads,
    fletCnt = 15,
    onClick = undefined,
}: Props) => {

    return (
        <div
            style={{
                whiteSpace: "nowrap",
            }}
        >
        {threads.map((thread) => {
            return (
                <div
                    style={{
                        height: CELL_HEIGHT-CELL_WEIGHT/2,
                    }}
                >
                    <ThreadBox 
                        fletCnt={fletCnt}
                        markedFlets={thread.markedFlets}
                        onClick={onClick ? (flet) => onClick(thread.thNum, flet) : undefined}
                    />
                </div>
            )
        })}
        </div>
    )
}