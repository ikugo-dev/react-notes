import './App.css'
import Notes from './components/Notes';
import InputForNote from './components/InputForNote';
import { useState } from 'react';

function App() {
    const [inputNoteText, setInputNoteText] = useState("");
    return (
        <>
            <InputForNote text={inputNoteText} setText={setInputNoteText} />
            <Notes text={inputNoteText} clearInput={() => setInputNoteText("")} />
        </>
    );
}

export default App
