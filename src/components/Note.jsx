function Note({ text, id, deleteSelf }) {
    return (
        <div key={id}>
            <h2 style={{ border: "4px solid black" }} > {text} </h2>
            <button onClick={deleteSelf}>Delete</button>
        </div>
    );
};

export default Note;
