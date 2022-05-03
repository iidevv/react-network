import React from "react";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="py-4 bg-white shadow-lg">
      <div className="container flex justify-between">
        <h1 className="text-2xl">R Network</h1>
        {(props.isAuth && props.login) ? props.login : 
          <NavLink
          to="/login"
          type="button"
          className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-28 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Sign in
        </NavLink>
        }
        
      </div>
    </header>
  );
};

export default Header;
