import { Link } from "@reach/router";
import { useState } from "react";
import AddWish from "./AddWish";

function Wishes(props) {
    const { data, addComment } = props;
    const [comment, setComment] = useState();

    return (
        <>
            <h1>List of Whishes</h1>
            <AddWish addWish={props.addWish}></AddWish>
            <ul>
                {
                    data.map((wish) => {
                        return (
                            <li key={wish._id}>
                                <Link to={`/wish/${wish.id}`}>{wish.title}</Link>
                                <p>Comments: {wish.comment}</p>
                                <form >
                                    <label>
                                        Add comment:
                                        <input onChange={(event) => setComment(event.target.value)} type="text" />
                                    </label>
                                    <button type="submit" onClick={(event) => { addComment(wish.id, comment) }}>Add</button>
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