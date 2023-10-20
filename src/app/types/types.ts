export type ResultsType = {
    pos: number,
    word: string,
    match: Boolean,
}

export type StatsType = {
    origCount: number,
    learnerCount: number,
    percent: number,
}

export type StateType = {
    orig: string,
    origArr: string[],
    learner: string,
    learnerArr: string[],
    resultsArr: ResultsType[]
    stats: StatsType,
}

export type ActionType = {
    type: string,
    payload: string,
}