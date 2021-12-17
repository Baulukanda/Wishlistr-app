import { useState, useEffect } from "react";
import AddComment from "./AddComment";
const API_URL = process.env.REACT_APP_API;

function Wish(props) {
    const { addComment } = props
    const [wish, setWish] = useState([]);



    useEffect(() => {
        async function getWishData() {
            const id = props.id
            const url = `${API_URL}/wishes/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            setWish(data)
        }
        getWishData();
    }, [props.id]);

    return (
        <>
            <h2>{wish?.title}</h2>
            <p><strong>By: </strong> {wish?.author}</p>
            <p><strong>Description: </strong> {wish?.description}</p>
            <strong>Link to the wish: </strong><a href={wish?.link} rel='noreferrer' target='_blank'>Find</a>
            <p><strong>Date: </strong> {wish?.createdAt}</p>
            <AddComment id={wish._id} addComment={addComment}></AddComment>

            <h2>Comments: </h2>
            <ul>
                {(wish.comments || []).map((item) => (
                    <li key={item._id}>
                        <p><strong>Comment: </strong> {item.text}</p>
                        <p><strong>By: </strong> {item.author}</p>
                        <p><strong>Date: </strong> {item.createdAt}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Wish;