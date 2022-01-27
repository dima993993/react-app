import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../img/user.jpg";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

  let usersElement = props.users.map((user) => {
    return (
      <div>
        <NavLink to={"/profile" + "/" + user.id}>
          <div className={style.name_block}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt={user.name}
            />
            <div className={style.user_name}>{user.name}</div>
          </div>
        </NavLink>
        <div className={style.btn_block}>
          <p>{"Ukraine"}</p>
          <p>{"Donetsk"}</p>
          {user.followed ? (
            <button
              onClick={() => {
                props.unfollow(user.id);
              }}>
              Follow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(user.id);
              }}>
              Unfollow
            </button>
          )}
        </div>
      </div>
    );
  });
  return (
    <div className={style.users_container}>
      <div className={style.users}>
        <h3>Users</h3>
      </div>
      <div className={style.user_wrapper}>{usersElement}</div>
      <div className={style.pages}>
        {pages.map((p) => {
          return (
            <div
              className={props.currentPage === p && style.select}
              onClick={() => {
                props.onPageChenged(p);
              }}>
              {p}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
