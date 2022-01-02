import React from "react";
import UserImg from "../../assets/images/user-img.png";
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <div className="shadow-lg rounded-2xl w-96 p-4 bg-white dark:bg-gray-800">
      <div className="flex flex-row items-start gap-4">
        <NavLink className="w-28 h-28" to={'/profile/' + props.id}>
        <img
          src={props.avatarUrl !== undefined ? props.avatarUrl : UserImg  }
          className="rounded-lg"
          alt={props.name}
        />
        </NavLink>
        <div className="h-28 w-full flex flex-col justify-between">
          <div>
            <p className="text-gray-800 dark:text-white text-xl font-medium">
              {props.name}
            </p>
            <p className="text-gray-400 text-xs">{props.status}</p>
          </div>
          <div className="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
            <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
              <p className="flex flex-col">
                {/* {props.location.city} */}
                <span className="text-black dark:text-indigo-500 font-bold">
                  {/* {props.location.country} */}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 mt-6">
        <button
          type="button"
          className="w-1/2 px-4 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 "
        >
          Chat
        </button>
        {props.followed ? (
          <button
            type="button"
            className="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 "
            onClick={() => {
              props.unfollow(props.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            type="button"
            className="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 "
            onClick={() => {
              props.follow(props.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
