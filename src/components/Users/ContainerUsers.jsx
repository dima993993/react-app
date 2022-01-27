import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  follow,
  setUsers,
  unfollow,
  setTotalUsersCount,
  toggleStateLoading,
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainerAPI extends React.Component {
  componentDidMount() {
    this.props.toggleStateLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleStateLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChenged = (numberPage) => {
    this.props.setCurrentPage(numberPage);
    this.props.toggleStateLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleStateLoading(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.toggleState ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChenged={this.onPageChenged}
            currentPage={this.props.currentPage}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    toggleState: state.usersPage.toggleStateLoading,
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (numberPage) => {
//       dispatch(setCurrentPageAC(numberPage));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleState: (toggle) => {
//       dispatch(toggleStateLoadingAC(toggle));
//     },
//   };
// };

const ContainerUsers = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleStateLoading,
})(UsersContainerAPI);

export default ContainerUsers;
