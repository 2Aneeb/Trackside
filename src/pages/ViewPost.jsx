import { useState, useEffect } from 'react';
import { useRoutes, Link, useNavigate, useParams } from 'react-router-dom';  
import { supabase } from '../client';
import './ViewPost.css';

function ViewPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null); 
    const [upVotes, setUpvotes] = useState(0); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select()
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching post:', error);
            } else {
                setPost(data);
                setUpvotes(data.Upvotes); 
            }
        };
        fetchPost();
    }, [id]);

    const deletePost = async () => {
        const { error } = await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting post:', error);
        } else {
            console.log('Deleted');
            navigate('/')
        }
    };

    const upVotePost = async (event) => {
        event.preventDefault();

        const updatedUpvotes = post.Upvotes + 1; 
        await supabase
            .from('Posts')
            .update({ Upvotes: updatedUpvotes })
            .eq('id', id);

            setPost(prevPost => ({ ...prevPost, Upvotes: updatedUpvotes }));
            setUpvotes(updatedUpvotes);
    };

    if (!post) {
        return (
            <div className="loading-container">
              <div className="spinner"></div>
            </div>
          );
          
    }

    return (
        <div className='ViewPost'>
            <div className='Post'>
                <h1>{post.Title}</h1>
                <p className='desc'>{post.Description}</p>
                {post.Image ? <img src={post.Image} alt="image" />: ''}
                <h4>{upVotes} upvotes</h4>
                <button onClick={upVotePost}>Upvote</button>
                <Link to={"/edit-post/" + post.id}><button className="">Edit</button></Link>
                <button className="deleteBtn" onClick={deletePost}>Delete</button>
             </div>
        </div>
    );
}

export default ViewPost;
