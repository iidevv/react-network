import React from "react";
import { connect } from "react-redux";
import {
  addPostAction,
  updatePostAction,
} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    post: state.profilePage.posts,
    newPostValue: state.profilePage.newPostValue
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updatePostAction(text));
    },
    newPost: () => {
      dispatch(addPostAction());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
