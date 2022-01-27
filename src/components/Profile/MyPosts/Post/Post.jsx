import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post_wrapper}>
      <div className={style.post}>
        <div className={style.image_block}>
          <img
            src='https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195160429.jpg'
            alt='avatar'
          />
        </div>
        <div>{props.message}</div>
      </div>
      <div className={style.like}>
        <a href='#'>&hearts; {props.likesCount}</a>
      </div>
    </div>
  );
};
export default Post;
