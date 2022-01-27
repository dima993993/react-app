import ContainerMyPosts from "./MyPosts/ContainerMyPosts";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <ContainerMyPosts />
    </div>
  );
};

export default Profile;
