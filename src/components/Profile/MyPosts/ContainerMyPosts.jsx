import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

// const ContainerMyPosts = (props) => {
//   let profilePage = props.store.getState().profilePage;
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let updateNewPostText = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   };
//   return (
//     <MyPosts
//       updateNewPostText={updateNewPostText}
//       addPost={addPost}
//       posts={profilePage.posts}
//       newPostText={profilePage.newPostText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

const ContainerMyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ContainerMyPosts;
