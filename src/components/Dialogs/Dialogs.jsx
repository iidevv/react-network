import React from "react";
import DialogItem from "./DialogsItem/DialogItem";
import Messages from "./Messages/Messages";
import {
  addMessageAction,
  updateMessageAction,
} from "../../redux/reducers/dialogs-reducer";

const Dialogs = (props) => {
  let newDialogElement = React.createRef();

  let dialogsMap = props.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />;
  });

  let messageMap = props.messages.map((message) => {
    return <Messages message={message.name} key={message.id} />;
  });

  let addMessage = () => {
    props.addMessage();
  };

  let onChangeMessage = (e) => {
    let text = newDialogElement.current.value;
    props.onChangeMessage(text);
  };

  return (
    <div>
      <div>
        <ul>{dialogsMap}</ul>
      </div>

      <div>
        {messageMap}
        <div>
          <textarea
            ref={newDialogElement}
            onChange={onChangeMessage}
            value={props.dialogsCurrentValue}
          ></textarea>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
