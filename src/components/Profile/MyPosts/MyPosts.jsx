import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsMap = props.post.map((m) => {
    return <Post message={m.message} likes={m.likes} key={m.id} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.newPost();
  };

  let onChangeValue = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">My Posts</h2>
      <div className="flex align-middle p-4 rounded-xl shadow-lg">
        <textarea
          ref={newPostElement}
          onChange={onChangeValue}
          value={props.newPostValue}
          placeholder="add new post"
        />
        <button onClick={onAddPost}>send</button>
      </div>
      {postsMap}
    </div>
  );
};

export default MyPosts;
