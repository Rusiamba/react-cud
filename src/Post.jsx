import {NavLink} from "react-router-dom";

function Post({content, id}) {
    return (
        <NavLink to={`/post/${id}`} className="post">
            <header>
                <img className="avatar"
                     src='https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg' alt='avatar'/>
                <div className="name">Ruslan Orudzhev</div>
            </header>
            <main>
                {content}
            </main>
            <footer>
                <img className="avatar"
                     src='https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg' alt='avatar'/>
                     <input className='input'/>
            </footer>
        </NavLink>
    );
}

export default Post;