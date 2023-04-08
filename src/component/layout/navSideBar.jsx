import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import "./layout.css";

function NavSideBar() {
  return (
    <div className="navside-bar">
      <SideBar />
      <div className="navtim">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default NavSideBar;
