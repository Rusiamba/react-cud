import './App.css';
import {useEffect, useState} from "react";
import Post from "./Post";
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import FormPost from "./FormPost";
import DetailPost from "./DetailPost";
import DetailPostEdit from "./DetailPostEdit";
import {fetchPosts} from "./fetchPosts";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(setPosts)
    }, [])

    const addPost = (content) => {
        console.log(content)
        fetch('http://localhost:7777/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content})
        })
        fetchPosts(setPosts);
    }

    return (
        <div className="App">
            <Router>
                <button className='button add-post'>
                    <NavLink className='link' to='/post/new'>Создать пост</NavLink>
                </button>
                <Route path="/post/new" render={(props) => <FormPost {...props} addPost={addPost}/>}/>
                <Route exact path="/posts" render={() => posts.map(e => <Post key={e.id} id={e.id} content={e.content}/>)}/>
                <Route exact path="/post/:id" component={DetailPost}/>
                <Route exact path="/post/:id/edit" component={DetailPostEdit}/>
            </Router>
        </div>
    );
}

export default App;