import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";
import UserImg from "../../assets/images/user-img.png";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const contacts = props.profile.contacts;
  return (
    <>
      <div className="grid grid-cols-profile gap-4 mb-4">
        <div className="bg-white rounded-sm shadow-sm p-4 self-start">
          <img
            className="d-b w-full rounded-sm"
            src={
              props.profile.photos.large ? props.profile.photos.large : UserImg
            }
            alt={props.profile.fullName}
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
        <div className="bg-white rounded-sm shadow-sm p-4">
          <div className="border-b">
            <h1 className="text-4xl capitalize mb-2">
              {props.profile.fullName}
            </h1>
            <p className="text-gray-400 text-sm mb-2">
              {props.profile.aboutMe}
            </p>
          </div>
          <dl>
            {Object.entries(contacts).map(([key, value]) => {
              if (value) {
                return (
                  <>
                    <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt class="text-sm font-medium text-gray-500">{key}</dt>
                      <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <a
                          href={"https://" + value}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {value}
                        </a>
                      </dd>
                    </div>
                  </>
                );
              }
            })}
          </dl>
        </div>
        <MyPostsContainer />
        </div>
      </div>
    </>
  );
};

export default Profile;
