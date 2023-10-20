'use client'

import LyricColumn from "./LyricColumn"
import ResultsColumn from "./ResultsColumn"
import useLyrics from "../hooks/useLyrics"

export default function ClientWrapper() {
  const { dispatch, ACTIONS, results, orig, learner, origCount, learnerCount, percent } = useLyrics()

  return (
    <div className="w-full mx-auto sm:flex-grow flex flex-col-reverse sm:flex-col">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-4 flex-grow">

        <LyricColumn id={ACTIONS.ORIGINAL} text={orig} dispatch={dispatch} />

        <LyricColumn id={ACTIONS.LEARNER} text={learner} dispatch={dispatch} />

        <ResultsColumn results={results} />

      </div>
      <div className="mb-2">
        <p>Original has {origCount} words.</p>
        <p>Learner provided {learnerCount} words.</p>
        <p>Percent correct: {percent}%</p>
      </div>
    </div>
  )
}