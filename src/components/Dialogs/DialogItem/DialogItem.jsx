import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItems = (props) => {
  let path = props.id;

  return (
    <div className={style.dialog}>
      <div>
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <NavLink
          to={path}
          className={(navData) =>
            navData.isActive ? style.active : style.item
          }
        >
          {props.name}
        </NavLink>
      </div>
    </div>
  );
};

export default DialogsItems;
