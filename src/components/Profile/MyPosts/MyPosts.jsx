import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import { NavLink } from "react-router-dom";

const MyPosts = (props) => {
  let postElement = props.posts.map((post) => (
    <Post message={post.message} id={post.id} likesCount={post.likesCount} />
  ));

  let addPost = () => {
    if (props.newPostText !== "") {
      props.addPost();
    }
  };

  let updateNewPostText = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.my_posts}>
      <h4>My Posts</h4>
      <div>
        <div>
          <textarea
            className={style.textAreaPost}
            onChange={updateNewPostText}
            value={props.newPostText}></textarea>
        </div>
        <div className={style.wrapper_btn_post}>
          <NavLink to='#' className={style.btn_post} onClick={addPost}>
            Добавить пост
          </NavLink>
        </div>
      </div>
      <div className={style.wrapper_posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
