import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-700 text-white p-4 flex justify-center gap-8 sticky top-0 z-20">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todo">Todo</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Header;
