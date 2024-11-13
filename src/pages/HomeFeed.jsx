import { useState, useEffect } from 'react'
import PostCard from '../components/PostCard';
import { supabase } from '../client'
import './HomeFeed.css'

function HomeFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
          const fetchPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select();
            setPosts(data)
        }
  
        fetchPosts()
    }, []);

    return (
        <div className='HomeFeed'>
        <br /> 
        {  
            posts && posts.length > 0 ?
            posts.map((posts,index) => 
                <PostCard id={posts.id} Title={posts.Title} Desc={posts.Description} />
            ) : <h2>No posts have been created yet.</h2>
            
        }

        </div>
    )
}

export default HomeFeed;