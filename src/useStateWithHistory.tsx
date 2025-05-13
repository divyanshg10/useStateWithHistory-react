import {useState} from "react";

const useStateWithHistory = <T, >(initialValue: T, maxHistoryLength?: number): [T, (state: T) => void, T[], () => void] => {
    if (!maxHistoryLength) {
        maxHistoryLength = 5
    }

    const [history, setHistory] = useState<T[]>([initialValue])

    const setState = (newState: T) => {
        let currentHistory = history;
        if (history.length === maxHistoryLength) {
            currentHistory = history.slice(1)
        }
        setHistory([...currentHistory, newState]);
    }

    const undoState = () => {
        if (history.length > 1) {
            setHistory(history.slice(0, -1));
        }
    }

    return [
        history[history.length - 1],
        setState,
        history,
        undoState,
    ]
}

export default useStateWithHistory;