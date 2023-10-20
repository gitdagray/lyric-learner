import { useContext } from "react"
import LyricContext from "../context/LyricProvider"
import { UseLyricContextType } from "../context/LyricProvider"

export default function useLyrics(): UseLyricContextType {
    return useContext(LyricContext)
}