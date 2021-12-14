import { Link } from "@reach/router";
import { useState } from "react";
import AddWish from "./AddWish";

function Wishes(props) {
    let data = props.data;


    return (
        <>
            <h1>List of Wishes</h1>
            <AddWish addWish={props.addWish}></AddWish>
            <ul>
                {
                    data.map((wish) => {
                        return (
                            <li key={wish.id}>
                                <strong>Wish: </strong>
                                <Link to={`/wish/${wish._id}`}>{wish.title}</Link>
                                <p><strong>Description: </strong> {wish?.description}</p>
                                <p><strong>Link: </strong>{wish?.link}</p>
                                <p><strong>Creation date: </strong>  {wish?.creationDate}</p>
                            </li>
                        )
                    })
                }
            </ul><br />
        </>
    )
}

export default Wishes;