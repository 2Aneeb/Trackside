import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './PostCard.css'

function PostCard(props) {


    //title, and optionally additional textual content and/or an image added as an external image URL
    //By default, only the time created, title, and upvotes count for each post is shown on the posts feed
    return (
        <div className="PostCard">
            <br />
            <Link to={"/view-post/" + props.id} className="CardLink">
                <div className='Card'>
                
                        <h3>{props.Title}</h3> 
                        <p>{props.Desc}</p> 
                    
                </div>
            </Link>
        </div>
    )
}  

export default PostCard;