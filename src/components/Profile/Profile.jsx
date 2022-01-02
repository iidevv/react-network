import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';
  

const Profile = (props) => {
    return (
        <>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </>
    )
}

export default Profile;