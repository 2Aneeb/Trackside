import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './PostCard.css'

function PostCard() {


    //title, and optionally additional textual content and/or an image added as an external image URL
    //By default, only the time created, title, and upvotes count for each post is shown on the posts feed
    return (
        <div className="PostCard">
            <div className='Card'>
                PostCard
               <br />
            <Link to="/view-post"><button className="headerBtn"> View</button></Link>
            <Link to="/edit-post/:id"><button className="headerBtn"> Edit</button></Link>
            </div>

        </div>
    )
}  

export default PostCard;