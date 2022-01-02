import React from "react";
import User from "./User";

const Users = (props) => {
  return (
    <div>
        <div className="flex flex-wrap gap-5 mb-8">
          {props.users.map((m) => {
            return (
              <User
                key={m.id}
                id={m.id}
                avatarUrl={m.photo}
                name={m.name}
                followed={m.followed}
                status={m.status}
                location={m.location}
                follow={props.follow}
                unfollow={props.unfollow}
              />
            );
          })}
        </div>
        {/* pagination */}
        <div>
          <nav
            className="relative z-0 flex justify-center rounded-md -space-x-px"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => {props.onPageChanged(props.currentPage - 1)}}
            >
              Prev
            </button>
            {props.pages.map((p) => {
              return <button
              className={props.currentPage === p ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'}
              onClick={() => {props.onPageChanged(p)}}
            >
              {p}
            </button>
            })}
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={() => {props.onPageChanged(props.currentPage + 1)}}
            >
              Next
            </button>
          </nav>
        </div>
        {/* pagination */}
      </div>
  )
}

export default Users;
