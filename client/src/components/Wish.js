import { useState, useEffect } from "react";
const API_URL = process.env.REACT_APP_API;

function Wish(props) {
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
            <h3>Title: {wish?.title}</h3>
            <p>Description: {wish?.description}</p>
            <p>Link: {wish?.link}</p>
            <p>Comments: {wish?.comment}</p>
            <p>Date: {wish?.dateCreated}</p>
        </>
    );
}

export default Wish;