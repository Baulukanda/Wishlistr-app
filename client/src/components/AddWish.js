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
                    Wish:
                    <input onChange={(event) => setTitle(event.target.value)} type="text" />
                </label>
                <label>
                    Description:
                    <input onChange={(event) => setDescription(event.target.value)} type="text" />
                </label>
                <label>
                    Link:
                    <input onChange={(event) => setLink(event.target.value)} type="text" />
                </label>
                <label>
                    who wished this?:
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
