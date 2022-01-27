import { NavLink } from "react-router-dom";
import ContainerBlockFriends from "./BlockFriends/ContainerBlockFriends";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <div>
          <NavLink
            to='/profile'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/dialogs'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Message
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/users'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Users
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/news'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            News
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/music'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Music
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/settings'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
      <ContainerBlockFriends />
    </nav>
  );
};
export default Navbar;
