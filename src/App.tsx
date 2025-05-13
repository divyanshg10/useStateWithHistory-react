import {type ChangeEvent, useState} from 'react'
import useStateWithHistory from "./useStateWithHistory.tsx";

function App() {
    const [name, setName, nameHistory, undo] = useStateWithHistory<string>("initial value");

    const [value, setValue] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onUpdateClick = () => {
        setName(value)
        setValue('')
    }

    const onUndoClick = () => {
        undo()
    }

    return <div>
        <div>
            <form onSubmit={e => {e.preventDefault()}}>
                <input type="text" value={value} onChange={onChange}/>
                <input type='submit' onClick={onUpdateClick} value='Update name'/>
            </form>
        </div>
        <div>
            <div>Name: {name}</div>
            <div>History</div>
            <table>
                <tbody>
                {nameHistory.map((name, index) => <tr key={name + index}>
                    <td>{name}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
        <button onClick={onUndoClick}>Undo</button>
    </div>
}

export default App
