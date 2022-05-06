import React from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
const Header = (props) => {
  return (
    <header className="fixed left-0 top-0 w-full py-2 bg-white shadow-sm z-50">
      <div className="container flex justify-between">
        <img src={Logo} alt="Logo" />
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
