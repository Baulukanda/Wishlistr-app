import { Link } from "@reach/router";
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
                                <h2><Link to={`/wish/${wish._id}`}>{wish.title}</Link></h2>
                                <p><strong>Description: </strong> {wish?.description}</p>
                                <strong>Link to the wish: </strong><a href={wish.link} rel='noreferrer' target='_blank'>Find</a>
                                <p><strong>Comments: </strong>  ({wish.comments.length})</p>
                            </li>
                        )
                    })
                }
            </ul><br />
        </>
    )
}

export default Wishes;