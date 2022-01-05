import { Cell } from "../../components/svg/Cell"
import { AbsnoteImpl, Absnotes, ChordAnalyzerImpl, ChordImpl, ChordNamerImpl, ChordParserImpl } from "irreguitar-pkg"
export const TurningList = () => {
    const flets = Array.from(Array(12), (_, k) => k)

    console.log(new AbsnoteImpl(Absnotes.A1))

    const chord = new ChordImpl(
        new AbsnoteImpl(Absnotes.C3),
        [
            new AbsnoteImpl(Absnotes.E3),
            new AbsnoteImpl(Absnotes.G3),
        ]
    )

    const parser = new ChordParserImpl(new ChordAnalyzerImpl(), new ChordNamerImpl())

    return (
        <>
        <div>TurningList</div>
        {flets.map((f) => {
            return <Cell marked={f%3===2}/>
        })}
        chord name: {parser.parse(chord)}
        </>
    )
}