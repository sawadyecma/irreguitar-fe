import { CELL_HEIGHT, CELL_WEIGHT } from "../constants/cell";
import { Thread } from "../types/thread";
import { ThreadBox } from "./ThreadBox"

interface Props {
    threads: Thread[]
    fletCnt?: number
}

export const GuitarBox = ({
    threads,
    fletCnt = 15,
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
                        pressedFlet={thread.pressedFlet}
                    />
                </div>
            )
        })}
        </div>
    )
}