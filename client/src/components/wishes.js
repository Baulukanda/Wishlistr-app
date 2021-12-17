import { Link } from "@reach/router";
import AddWish from "./AddWish";

function Wishes(props) {
    let data = props.data;


    return (
        <>
            <AddWish addWish={props.addWish}></AddWish>
            <ul>
                <div class="container mt-5">
                    <div class="row">
                        {

                            data.map((wish) => {
                                return (
                                    <div class="col-sm-4">
                                        <div class="container mt-3">
                                            <div class="card front-card">
                                                <div class="card-body">
                                                    <li key={wish.id}>
                                                        <h2 class="wish-title"><Link to={`/wish/${wish._id}`}>{wish.title}</Link></h2>
                                                        <p><strong>Description: </strong> {wish?.description}</p>
                                                        <strong>External link : </strong><a href={wish?.link} rel='noreferrer' target='_blank'>Go to link</a>
                                                        <p><strong>Comments: </strong>  ({wish.comments.length})</p>
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </ul>
        </>
    )
}

export default Wishes;