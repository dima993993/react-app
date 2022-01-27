import { NavLink } from "react-router-dom";
import style from "./BlockFriends.module.css";

const BlockFriends = (props) => {
  let friendsItem = props.sidebar.map((friend) => {
    return (
      <NavLink
        to={friend.id}
        className={(navData) => (navData.isActive ? style.active : style.item)}
      >
        <div className={style.avatar_friends}>
          <img src={friend.img} alt={friend.name} />
        </div>
        <div className={style.name_friends}>{friend.name}</div>
      </NavLink>
    );
  });
  return (
    <div className={style.friends_block_wrapper}>
      <div>
        <h3>Best Friends</h3>
      </div>
      <div className={style.friends_block}>{friendsItem}</div>
    </div>
  );
};

export default BlockFriends;
