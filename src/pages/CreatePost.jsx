import {useState, useEffect} from 'react'
import { useRoutes, Link, useNavigate } from 'react-router-dom'; 
import { supabase } from '../client'
import './CreateEdit.css'


function CreatePost() {
    const [post, setPost] = useState({id: null, Title: "", Description: "", Image: ""})
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prevPost) => {
            return {
                ...prevPost,
                [name]:value,
            }
        })
       
    }

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Posts')
        .insert({Title: post.Title, Description: post.Description, Image: post.Image})
        .select();
              
        navigate('/')
    }

    return (
        <div className='CreatePost'>
            <form>
                <label htmlFor="Title">Title</label> <br />
                <input className="title" type="text" id="Title" name="Title" maxlength="80" onChange={handleChange} /><br />
                <br/>
                <label htmlFor="Description">Description</label> <br />
                <textarea className="desc" name="Description" id="Description" maxlength="350" onChange={handleChange}></textarea>
                <br/>
                <label htmlFor="Image">Image URL</label> <br />
                <input className="title" type="text" id="Image" name="Image" onChange={handleChange}/><br />
                <br/>
                <input className="submitbtn" type="submit" value="Create" onClick={createPost}/>
            </form>
        </div>

    )
}

export default CreatePost;