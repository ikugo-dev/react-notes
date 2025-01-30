import { useState } from "react";
import Note from "./Note.jsx";

function Notes({ text, clearInput }) {
    const [notes, setNotes] = useState([]);

    function addNote() {
        const newNote = {
            text: text,
            id: crypto.randomUUID()
        };
        setNotes([...notes, newNote]);
        clearInput();
    };

    return (
        <div>
            <button onClick={addNote}>POST</button>
            {notes.map((note) => {
                return <Note text={note.text} key={note.id} />
            })}
        </div>
    );
};

export default Notes;
