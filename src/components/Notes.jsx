import { useState } from "react";
import Note from "./Note.jsx";

function Notes({ text, clearInput }) {
    const [notes, setNotes] = useState([]);

    function addNote() {
        if (text.trim() == "")
            return;
        const newNote = {
            text: text,
            id: crypto.randomUUID()
        };
        setNotes([...notes, newNote]);
        clearInput();
    };

    function deleteByKey(key) {
        setNotes(notes.filter((note) => note.id != key));
    };

    return (
        <div>
            <button onClick={addNote}>POST</button>
            {notes.map((note) => {
                return <Note text={note.text} key={note.id} deleteSelf={() => deleteByKey(note.id)} />
            })}
        </div>
    );
};

export default Notes;
