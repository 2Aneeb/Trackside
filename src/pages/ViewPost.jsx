import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import './ViewPost.css';

function ViewPost() {
    const { id } = useParams();
    const [post, setPost] = useState('');

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
            console.log('deleted');
      
            window.location = "/";
        }
    };

    return (
        <div className='ViewPost'>
            <div className='Post'>
                <h1>{post.Title}</h1>
                <h3>{post.Description}</h3>
                <h4>{post.Image}</h4>
                <Link to={"/edit-post/" + post.id}><button className="headerBtn">Edit</button></Link>
                <button className="deleteBtn" onClick={deletePost}>Delete</button>
            </div>
        </div>
    );
}

export default ViewPost;
