import { Cell } from "./Cell"

interface Props {
    fletCnt?: number
    // undefined => 押弦なし
    // 0 => 開放弦
    pressedFlet?: number
}

export const ThreadBox = ({
    fletCnt = 12,
    pressedFlet,
}:Props) => {
    const flets = Array.from(Array(fletCnt), (_, k) => k)

    return(
        <>
        {flets.map((f) => {
            return <Cell pressed={f===pressedFlet}/>
        })}
        </>
    )
}