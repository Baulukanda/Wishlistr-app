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
            <p><strong>Wish: </strong>{wish?.title}</p>
            <p><strong>Author: </strong> {wish?.author}</p>
            <p><strong>Description: </strong> {wish?.description}</p>
            <p><strong>Link: </strong>{wish?.link}</p>

            <ul>
                {(wish.comments || []).map((item) => (
                    <li key={item._id}>
                        {item.text}
                    </li>
                ))}
            </ul>
            <AddComment id={wish._id} addComment={addComment}></AddComment>
        </>
    );
}

export default Wish;