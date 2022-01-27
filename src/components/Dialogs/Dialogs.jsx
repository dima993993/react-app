import style from "./Dialogs.module.css";
import DialogsItems from "./DialogItem/DialogItem";
import MessageItems from "./MessageItem/MessageItem";
import { NavLink } from "react-router-dom";
import React from "react";

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogsItems id={dialog.id} name={dialog.name} img={dialog.img} />
  ));
  let messageElements = props.dialogsPage.messages.map((message) => (
    <MessageItems id={message.id} message={message.message} />
  ));

  let addMessage = () => {
    if (props.dialogsPage.newMessageText !== "") {
      props.addMessage();
    }
  };
  let updateMessageText = (e) => {
    let text = e.target.value;
    props.updateMessageText(text);
  };
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogElements}</div>
      <div>
        <div className={style.messages}>{messageElements}</div>
        <div>
          <textarea
            className={style.messageArea}
            onChange={updateMessageText}
            value={props.dialogsPage.newMessageText}
          ></textarea>
          <div className={style.addMessage_wrapper}>
            <NavLink to='' className={style.addMessage} onClick={addMessage}>
              Отправить сообщение
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
