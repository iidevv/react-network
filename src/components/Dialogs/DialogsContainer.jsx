import React from "react";
import { connect } from "react-redux";
import {
  addMessageAction,
  updateMessageAction,
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addMessage = () => {
//           let action = addMessageAction();
//           store.dispatch(action);
//         };

//         let onChangeMessage = (text) => {
//           let action = updateMessageAction(text);
//           store.dispatch(action);
//         };

//         return (
//           <Dialogs
//             addMessage={addMessage}
//             onChangeMessage={onChangeMessage}
//             dialogs={state.dialogsPage.dialogs}
//             messages={state.dialogsPage.messages}
//             dialogsCurrentValue={state.dialogsPage.dialogsCurrentValue}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    dialogsCurrentValue: state.dialogsPage.dialogsCurrentValue
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageAction());
    },
    onChangeMessage: (text) => {
      dispatch(updateMessageAction(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
