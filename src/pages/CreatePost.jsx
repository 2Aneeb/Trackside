import {useState, useEffect} from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import './CreateEdit.css'


function CreatePost() {
    const [post, setPost] = useState({id: null, Title: "", Description: "", Image: ""})

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

        window.location = "/";

    }

    return (
        <div className='CreatePost'>
            <form>
                <label htmlFor="Title">Title</label> <br />
                <input className="title" type="text" id="Title" name="Title" maxlength="80" onChange={handleChange} /><br />
                <br/>
                <label htmlFor="Description">Description</label> <br />
                <textarea className="desc" name="Description" id="Description" maxlength="322" onChange={handleChange}></textarea>
                <br/>
                <label htmlFor="Name">Image URL</label> <br />
                <input className="title" type="text" id="Name" name="Name" onChange={handleChange}/><br />
                <br/>
                <input className="submitbtn" type="submit" value="Create" onClick={createPost}/>
            </form>
        </div>

    )
}

export default CreatePost;