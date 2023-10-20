import { useState } from "react"

type Props = {
    results: (JSX.Element | undefined)[]
}

export default function ResultsColumn({ results }: Props) {
    const [show, setShow] = useState(true)

    return (
        <section className="w-full sm:w-1/3 flex flex-col">

            <div className="flex justify-between">
                <h2 className="text-2xl">RESULTS</h2>
                <div className="flex items-center gap-2">
                    <label htmlFor="results">Hide</label>
                    <input
                        id="results"
                        type="checkbox"
                        onChange={() => setShow(!show)}
                    />
                </div>
            </div>

            <div id="Results" className={`bg-gray-500 p-4 w-full flex-grow min-h-[400px] overflow-y-scroll no-scrollbar ${show ? "block" : "hidden"} rounded`}>
                <div className="flex items-start flex-wrap gap-1">
                    {results.map(res => res)}
                </div>
            </div>
        </section>
    )
}