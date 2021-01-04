import {NavLink} from "react-router-dom";
import {useState} from "react";

function FormPost(props) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPost(value);
        props.history.push('/posts')
    }
    return (
        <div className="post-form">
            <form className='form' onSubmit={handleSubmit}>
                <header className='post-header'>
                    <button><NavLink to='/'>&#10006;</NavLink></button>
                </header>
                <textarea onChange={(e) => setValue(e.target.value)} className='textarea'/>
                <button type='submit' className='button'>Опубликвать</button>
            </form>

        </div>
    );
}

export default FormPost;