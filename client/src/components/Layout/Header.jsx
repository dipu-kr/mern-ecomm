import React from "react";
import logo from "../../assets/logo.png";
import {NavLink ,Link } from "react-router-dom";
import {BsHandbag} from 'react-icons/bs'

const Header = () => {
  return (
    <header className="w-full h-[60px] border flex justify-between items-center px-2 sm:px-2 md:px-6 shadow-md">
      <div className="w-[50px] h-[50px]">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] object-cover"
          />
        </Link>
      </div>
      <ul className="flex">
        <li className="mx-4">
          <NavLink to="/" className="uppercase hover:text-[#ff8a00]"> 
            Home
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/about" className="uppercase hover:text-[#ff8a00]">
            About
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/contact" className="uppercase hover:text-[#ff8a00]">
            Contact
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/register" className="uppercase hover:text-[#ff8a00]">
            Sign Up
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/login" className="uppercase hover:text-[#ff8a00]">
            Sign In
          </NavLink>
        </li>
        <li className="mx-4 relative">
          <NavLink to="/cart">
            <BsHandbag size={22}/>
            <span className="w-[20px] h-[20px] bg-[#ff8a00] absolute top-[-6px] right-[-12px] rounded-full flex justify-center items-center text-white text-[11px] font-bold">10</span>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
