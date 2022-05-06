import UserImg from "../../../../assets/images/user-img.png";

const Post = (props) => {
  return (
    <div className="shadow-sm bg-white p-4 rounded-sm">
      <div className="flex flex-1 items-center pb-4 mb-4 border-b">
        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <div className="block relative">
            <img
              alt="profil"
              src={UserImg}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </div>
        </div>
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium dark:text-white">Jean Marc</div>
          <div className="text-gray-600 dark:text-gray-200 text-sm">
            Developer
          </div>
        </div>
      </div>
      <div className="">
        <p>{props.message}</p>
        <p>likes <b>{props.likes}</b></p>
      </div>
    </div>
  );
};

export default Post;
