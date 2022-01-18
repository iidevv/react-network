import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  setToggleIsFetching,
} from "./../../redux/reducers/users-reducer";
import * as axios from "axios";
import Preloader from "./../common/Preloader/index";
import { usersAPI } from "./../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setToggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsers(data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setToggleIsFetching(true);
    this.props.setCurrentPage(p);
    usersAPI
      .getUsers(p, this.props.pageSize)
      .then((data) => {
        this.props.setToggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <>
        <h1 className="text-2xl font-bold mb-5">Пользователи</h1>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          pages={pages}
        />
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
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  setToggleIsFetching,
})(UsersContainer);
