import { useState, useEffect } from 'react'
import PostCard from '../components/PostCard';
import { supabase } from '../client'
import './HomeFeed.css'

function HomeFeed({ searchTerm }) {
    const [posts, setPosts] = useState([]);
    const [sortOrder, setSortOrder] = useState('newest');

    useEffect(() => {
          const fetchPosts = async () => {
            const {data} = await supabase
            .from('Posts')
            .select();
            setPosts(data)
        }
  
        fetchPosts()
    }, []);

    const filteredPosts = posts.filter(post =>
        post.Title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortOrder === 'newest') {
            return new Date(b.created_at) - new Date(a.created_at); 
        } else if (sortOrder === 'upvoted') {
            return b.Upvotes - a.Upvotes; 
        }
        return 0; 
    });

    const handleSortChange = (order) => {
        setSortOrder(order);
    };


    return (
        <div className='HomeFeed'>
            <div className='SortBtns'>
                <h3>Order by:</h3>
                <button onClick={() => handleSortChange('newest')}>Newest</button>
                <button onClick={() => handleSortChange('upvoted')}>Most Upvoted</button>
            </div>
            {
                sortedPosts.length > 0 ? (
                    sortedPosts.map((post) => (
                        <PostCard
                            key={post.id}
                            created_at={new Date(post.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            })}
                            id={post.id}
                            Title={post.Title}
                            Desc={post.Description}
                            Image={post.Image}
                            Upvotes={post.Upvotes}
                        />
                    ))
                ) : (
                    <div>
                        <br /><br />
                        <h2>No posts found matching your search.</h2>
                    </div>
                )
            }


        </div>
    )
}

export default HomeFeed;