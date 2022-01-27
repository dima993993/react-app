import style from "./../Dialogs.module.css";

const MessageItems = (props) => {
  return <div className={style.message}>{props.message}</div>;
};
export default MessageItems;
