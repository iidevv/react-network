const Post = (props) => {
    return (
        <div>
            <img src="https://static.thenounproject.com/png/2014807-200.png" alt="user" />
            <p>{props.message}</p>
            <p>{props.likes}</p>
        </div>
    )
}

export default Post;