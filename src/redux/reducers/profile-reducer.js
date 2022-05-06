import { usersAPI } from "./../../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { message: "first message", likes: 5 },
  ],
  newPostValue: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { message: state.newPostValue, likes: 0 }],
        newPostValue: "",
      };

    case UPDATE_POST:
      return {
        ...state,
        newPostValue: action.newPostValue,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPostAction = () => {
  return {
    type: ADD_POST,
  };
};

export const updatePostAction = (text) => {
  return {
    type: UPDATE_POST,
    newPostValue: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const getProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data))
    });
  };
};

export default profileReducer;
