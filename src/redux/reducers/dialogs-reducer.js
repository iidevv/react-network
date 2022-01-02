const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
  dialogs: [
    {
      name: "name1",
      id: 1,
    },
    {
      name: "name2",
      id: 2,
    },
    {
      name: "name3",
      id: 3,
    },
  ],
  messages: [
    {
      name: "test3",
      id: 1,
    },
  ],
  dialogsCurrentValue: "sts",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { name: state.dialogsCurrentValue, id: 2 }],
        dialogsCurrentValue: "",
      };

    case UPDATE_MESSAGE:
      return {
        ...state,
        dialogsCurrentValue: action.newMessageValue,
      };
    default:
      return state;
  }
};

export const addMessageAction = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateMessageAction = (text) => {
  return {
    type: UPDATE_MESSAGE,
    newMessageValue: text,
  };
};

export default dialogsReducer;
