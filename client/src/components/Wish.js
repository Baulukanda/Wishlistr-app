import { useState, useEffect } from "react";
const API_URL = process.env.REACT_APP_API;

function Wish(props) {
    const { addComment } = props
    const [wish, setWish] = useState([]);
    const [comment, setComment] = useState();
    const [commentAuthor, setcommentAuthor] = useState("");
    const [commentDate, setcommentDate] = useState("");


    useEffect(() => {
        async function getWishData() {
            const id = props.id
            const url = `${API_URL}/wishes/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(id)
            setWish(data)
        }
        getWishData();
    }, [props.id]);

    return (
        <>
            <p><strong>Wish: </strong>{wish?.title}</p>
            <p><strong>Author: </strong> {wish?.author}</p>
            <p><strong>Description: </strong> {wish?.description}</p>
            <p><strong>Link: </strong>{wish?.link}</p>
            <p><strong>Creation date: </strong>  {wish?.creationDate}</p>
            <p><strong>Comments: </strong>  {wish?.comments}</p>
            <form >
                <label>
                <   strong>Add comment </strong>
                    <input onChange={(event) => setComment(event.target.value)} type="text" />
                </label>
                <label>
                    <strong>who said it?: </strong>
                    <input onChange={(event) => setcommentAuthor(event.target.value)} type="text" />
                </label>
                <input type="submit" onClick={(event) => { addComment(comment, commentAuthor);}} value="Add comment" />
            </form>
        </>
    );
}

export default Wish;