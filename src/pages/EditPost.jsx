import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './CreateEdit.css'

function EditPost() {
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
                console.error(error);
                return;
            }
            setPost(data); 
        };

        fetchPost();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost(prevPost => ({
            ...prevPost,
            [name]: value, 
        }));
    };

    const updatePost = async(event) => {
        event.preventDefault();

        await supabase
        .from('Posts')
        .update({Title: post.Title, Description: post.Description, Image: post.Image})
        .eq('id', id)

        window.location = "/";
    }



    return (
        <div className='CreatePost'>
          
            <form >
                <h1>Edit Post</h1>
                <br />
                <label htmlFor="Title">Title</label> <br />
                <input className="title" type="text" id="Title" name="Title" value={post.Title} onChange={handleChange} maxLength="80"
                /><br />
                <br />
                <label htmlFor="Description">Description</label> <br />
                <textarea className="desc" name="Description" id="Description" value={post.Description} onChange={handleChange} maxLength="322"  placeholder="Enter Description"></textarea>
                <br />
                <label htmlFor="Image">Image URL</label> <br />
                <input className="title" type="text" id="Image" name="Image" value={post.Image} onChange={handleChange} placeholder="Enter image URL"/><br />
                <br />
                <input className="submitbtn" type="submit" value="Update Post" onClick={updatePost} />
            </form>
        </div>
    );
}

export default EditPost;
