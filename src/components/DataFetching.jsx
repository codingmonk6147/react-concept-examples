import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);
	// const [id, setId] = useState(1)
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        if (idFromButtonClick) {
            // Fetch a specific post if ID is provided
            axios
                .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
                .then(res => {
                    setPost(res.data);
                    setPosts([]); // Clear the posts array when fetching a specific post
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            // Fetch all posts if no ID is provided
            axios
                .get(`https://jsonplaceholder.typicode.com/posts`)
                .then(res => {
                    setPosts(res.data);
                    setPost(null); // Clear the single post when fetching all posts
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [idFromButtonClick]);


	const handleClick = () => {
		setIdFromButtonClick(id)
	}

	return (
        // fragment inside fragment possible
        <>
		<div>
			<input type="text" value={idFromButtonClick} onChange={e => setIdFromButtonClick(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
            {post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ) : (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
		</div>
        </>
	)
}

export default DataFetching;