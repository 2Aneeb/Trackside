import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './PostCard.css'

function PostCard(props) {

    return (
        <div className="PostCard">
            <br />
            <Link to={"/view-post/" + props.id} className="CardLink">
                <div className='Card'>
                        <h3>{props.Title}</h3> 
                        <p>{props.Desc}</p> 
                        {props.Image ? <img src={props.Image} alt="image" />: ''}
                        <div className={props.Image ? '' : 'no-image-margin'}>
                            <p>{props.Upvotes} upvotes</p>
                            <p>Posted on: {props.created_at}</p>
                        </div>
                  
                </div>
            </Link>
        </div>
    )
}  

export default PostCard;