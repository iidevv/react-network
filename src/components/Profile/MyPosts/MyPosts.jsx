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
  };

  return (
    <>
      <div className="bg-white rounded-sm shadow-sm p-4">
        <div className=" border-b pb-4">
          <div className="flex flex-col items-start mb-8">
            <textarea
              ref={newPostElement}
              className="flex-1 appearance-none mb-2 border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              onChange={onChangeValue}
              value={props.newPostValue}
              placeholder="What's new?"
            />
            <button
              className="py-2 px-12  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-sm"
              onClick={onAddPost}
            >
              Post
            </button>
          </div>
          <h2 className="text-2xl">My Posts</h2>
        </div>
      </div>
      {postsMap}
    </>
  );
};

export default MyPosts;
