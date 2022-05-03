import React from "react";
import Header from "./Header";
import { setAuthUserData, authUser } from "./../../redux/reducers/auth-reducer";
import { connect } from "react-redux";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authUser();
  }
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  setAuthUserData,
  authUser,
})(HeaderContainer);
