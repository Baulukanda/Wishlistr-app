import { Link } from "@reach/router";
import { useState } from "react";
import AddWish from "./AddWish";

function Wishes(props) {
    let data = props.data;
    const { addComment } = props;
    const [comment, setComment] = useState();

    return (
        <>
            <h1>List of Whishes</h1>
            <AddWish addWish={props.addWish}></AddWish>
            <ul>
                {
                    data.map((wish) => {
                        return (
                            <li key={wish.id}>
                                <strong>Title: </strong>
                                <Link to={`/wish/${wish._id}`}>{wish.title}</Link>
                                <p><strong>Author: </strong>{wish?.author}</p>
                                <p><strong>Comments: </strong>{wish?.comments}</p>
                                <form >
                                    <label>
                                        <strong>Add comment </strong>
                                        <input onChange={(event) => setComment(event.target.value)} type="text" />
                                    </label>
                                    <button type="submit" onClick={(event) => { addComment(comment, wish.id) }}>Add</button>
                                </form>

                            </li>
                        )
                    })
                }
            </ul><br />
        </>
    )
}

export default Wishes;