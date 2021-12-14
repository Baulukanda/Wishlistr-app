import { useState } from "react"

function AddWish(props) {
    const { addWish } = props;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [author, setAuthor] = useState("");

    return (
        <>
            <form >
                <label>
                    <strong>Your Wish </strong>
                    <input onChange={(event) => setTitle(event.target.value)} type="text" />
                </label>
                <label>
                    <strong>Description </strong>
                    <input onChange={(event) => setDescription(event.target.value)} type="text" />
                </label>
                <label>
                    <strong>Link </strong>
                    <input onChange={(event) => setLink(event.target.value)} type="text" />
                </label>
                <label>
                    <strong>Awho wish it? </strong>
                    <input onChange={(event) => setAuthor(event.target.value)} type="text" />
                </label>
                <input type="submit" onClick={(event) => {
                    addWish(title, description, link, author);
                }} value="Add wish" />
            </form>

        </>
    );
}

export default AddWish;
