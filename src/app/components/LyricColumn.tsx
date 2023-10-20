import { ACTION } from "../context/LyricProvider"
import { ActionType } from "../types/types"
import { useState } from "react"

type Props = {
    id: string,
    text: string,
    dispatch: React.Dispatch<ActionType>,
}

export default function LyricColumn({ id, text, dispatch }: Props) {
    const [show, setShow] = useState(true)

    return (
        <section className="w-full sm:w-1/3 flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-2xl">{id}</h2>
                <div className="flex items-center gap-2">
                    <label htmlFor={`${id}-toggle`}>Hide</label>
                    <input
                        id={`${id}-toggle`}
                        type="checkbox"
                        onChange={() => setShow(!show)}
                    />
                </div>
            </div>
            <textarea
                id={id}
                className={`bg-gray-500 p-4 w-full min-h-[400px] flex-grow ${show ? "block" : "hidden"} rounded`}
                value={text}
                onChange={e => dispatch({
                    type: ACTION[id as keyof typeof ACTION],
                    payload: e.target.value
                })}
            />
        </section>
    )
}