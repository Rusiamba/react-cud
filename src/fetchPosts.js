export const fetchPosts = (callback) => {
    fetch(' http://localhost:7777/posts')
        .then(response => response.json())
        .then(response => callback(response))
}