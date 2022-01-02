import { Cell } from "../../components/svg/Cell"

export const TurningList = () => {
    const flets = Array.from(Array(12), (_, k) => k)
    return (
        <>
        <div>TurningList</div>
        {flets.map((f) => {
            return <Cell marked={f%3===2}/>
        })}
        </>
    )
}