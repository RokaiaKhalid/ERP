import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/summary">Summary</NavLink>|
        <Link to="/productList" className=" text-blue-600">
          ProductList
        </Link>
        <Link to="/ProductThunk" className=" text-orange-600">
          ProductThunk
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default RootLayout;
