import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUserProfile,
  getProfile,
} from "./../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let authComponent = withAuthRedirect(ProfileContainer);
let withUrlDataContainerComponent = withRouter(authComponent);

export default connect(mapStateToProps, { setUserProfile, getProfile })(withUrlDataContainerComponent);
