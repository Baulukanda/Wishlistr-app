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
            <div class="container mt-3">
                <div class="card bg-secondary text-white">
                    <div class="card-body">
                        <h2>{wish?.title}</h2>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <p><strong>By: </strong> {wish?.author}</p>
                        <p><strong>Description: </strong> {wish?.description}</p>
                        <strong>External link : </strong><a href={wish?.link} rel='noreferrer' target='_blank'>Find wish</a>
                        <p><strong>Date: </strong> {wish?.createdAt}</p>
                        <AddComment id={wish._id} addComment={addComment}></AddComment>
                    </div>
                </div>
            </div>
            <div class="container mt-3">
                <div class="card">
                    <div class="card bg-secondary text-white">
                        <div class="card-body">
                            <h2>Comments</h2>
                        </div>
                    </div>
                    <ul>
                        {(wish.comments || []).map((item) => (
                            <li key={item._id}>
                                <div class="card-body">
                                    <p><strong>Comment: </strong> {item.text}</p>
                                    <p><strong>By: </strong> {item.author}</p>
                                    <p><strong>Date: </strong> {item.createdAt}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Wish;