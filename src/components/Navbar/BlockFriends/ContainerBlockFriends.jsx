import { connect } from "react-redux";
import BlockFriends from "./BlockFriends";

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar.friends,
  };
};
let mapDispachToProps = (dispatch) => {
  return {};
};

const ContainerBlockFriends = connect(
  mapStateToProps,
  mapDispachToProps
)(BlockFriends);

export default ContainerBlockFriends;
