import { useState } from "react"

function AddComment(props) {
    const { addComment, id } = props;

    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    return (
        <>
            <form >
                <label>
                <strong>Add comment </strong>
                    <input onChange={(event) => setText(event.target.value)} type="text" />
                </label>
                <label>
                <strong>who said it? </strong>
                    <input onChange={(event) => setAuthor(event.target.value)} type="text" />
                </label>
                <input type="submit" onClick={(event) => {
                    addComment(text, author, id);
                }} value="Add"/>
            </form>
        </>
    );
}

export default AddComment;
