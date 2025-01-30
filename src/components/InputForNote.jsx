function InputForNote({ text, setText }) {

    return (
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Input field"
        />
    );
};

export default InputForNote;
