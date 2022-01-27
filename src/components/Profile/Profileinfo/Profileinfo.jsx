import Preloader from "../../Common/Preloader/Preloader";
import style from "./Profileinfo.module.css";
const ProfileInfo = (props) => {
  let imgBg = {
    backgroundImage:
      "url(http://dgdesign.ru/uploads/posts/2016-03/1459189308_shapki-sayta-priroda.jpg)",
  };
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={style.profile_info} style={imgBg}>
      <div className={style.profile_info_wrapper}>
        <div className={style.profile_avatar}>
          <img src={props.profile.photos.large} alt='User' />
        </div>
        <div className={style.profile_name}>{props.profile.fullName}</div>
      </div>
      <div className={style.profile_description}>
        <p>{props.profile.lookingForAJobDescription}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
