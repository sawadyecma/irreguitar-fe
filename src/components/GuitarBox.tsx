import { Thread } from "../types/thread";
import { ThreadBox } from "./ThreadBox"

interface Props {
    threads: Thread[]
    fletCnt?: number
}

export const GuitarBox = ({threads, fletCnt = 12}: Props) => {

    return (
        <>
        {threads.map((thread) => {
            return <ThreadBox fletCnt={fletCnt}/>
        })}
        </>
    )
}