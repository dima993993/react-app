import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

// const ContainerDialogs = (props) => {
//   let dialogsPage = props.store.getState().dialogsPage;
//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };
//   let updateMessageText = (text) => {
//     props.store.dispatch(updateNewMessageActionCreator(text));
//   };
//   return (
//     <Dialogs
//       addMessage={addMessage}
//       updateMessageText={updateMessageText}
//       dialogsPage={dialogsPage}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessageText: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
  };
};

const ContainerDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default ContainerDialogs;
