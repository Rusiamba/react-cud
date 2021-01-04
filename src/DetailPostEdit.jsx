import {useEffect, useState} from "react";
import {fetchPosts} from "./fetchPosts";
import {NavLink} from "react-router-dom";

function DetailPostEdit(props) {
    const [posts, setPosts] = useState(null);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetchPosts(setPosts)
    }, [])

    let currentPost;
    if (posts) {
        currentPost = posts.filter(e => +e.id === +props.match.params.id);
        currentPost = currentPost[0];
        if(value === '') {
            setValue(currentPost.content);
        }
    }

    const hundleSubmit = (e) => {
        e.preventDefault();
        fetch(` http://localhost:7777/posts/${currentPost.id}`, {
            method: 'POST',
            body: {
                id: currentPost.id,
                content: value
            }
        })
        props.history.push(`/post/${currentPost.id}`)
    }

    return (
        <div className="edit">
            {currentPost && <>
                <header className='edit-header'>
                    <div>Edit post</div>
                    <button><NavLink to={`/post/${currentPost.id}`}>&#10006;</NavLink></button>
                </header>
                <form onSubmit={hundleSubmit}>
                    <input className='input' value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button type='submit' className='button'>Save</button>
                </form>
            </>}
        </div>
    );
}

export default DetailPostEdit;