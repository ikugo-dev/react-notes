import './App.css'
import NotePreview from './components/NotePreview';
import Notes from './components/Notes';
import InputForNote from './components/InputForNote';
import { useState } from 'react';

function App() {
    const [inputNoteText, setInputNoteText] = useState("");
    return (
        <>
            <InputForNote text={inputNoteText} setText={setInputNoteText} />
            <NotePreview text={inputNoteText} />
            <Notes text={inputNoteText} clearInput={() => setInputNoteText("")} />
        </>
    );
}

export default App
