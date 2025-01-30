function Note({ text, id }) {
    let displayText = (text != "") ? text : "Input text...";
    return (
        <h1 style={{ border: "4px solid black" }}
            key={id}>
            {displayText}
        </h1>
    );
};

export default Note;
