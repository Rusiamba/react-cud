import {useEffect, useState} from "react";
import {fetchPosts} from "./fetchPosts";
import Post from "./Post";

function DetailPost(props) {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetchPosts(setPosts)
    }, [])

    let currentPost;
    if(posts) {
        currentPost = posts.filter(e => +e.id === +props.match.params.id);
        currentPost = currentPost[0];
    }

    const deletePost = (id) => {
        fetch(` http://localhost:7777/posts/${id}`,{
            method: 'DELETE'
        })
        props.history.push('/')
    }

    return (
        <div className="detaol-post">
            {currentPost && <>
            <Post id={currentPost.id} content={currentPost.content}/>
            <div className='actions'>
                <button onClick={() => props.history.push(`/post/${currentPost.id}/edit`)} className='button'>Change</button>
                <button onClick={() => deletePost(currentPost.id)} className='button delete'>Delete</button>
            </div>
            </>}
        </div>
    );
}

export default DetailPost;