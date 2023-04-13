import React from "react";
import FBlogo from "../../props/FB-logo.png";
import SearchIcon from "../../props/search-icon.png";
import "./sidebar.css";
import MiddleSideBar from "./sidebarmiddle/middle";
import friends from "../../props/friendsSideMenu.png";
import MarketPlace from "../../props/MarketPlace.png";
import MostRecent from "../../props/MostRecent.png";
import group from "../../props/friends.png";
import watch from "../../props/ReelsIcons.png";
import iconUP from "../../props/upIcon.png";
import { uiStoreAction } from "../../store/UI";
import seeMoreIcon from "../../props/seeMoreIcon.png";
import { useSelector, useDispatch } from "react-redux";

function SideBar() {
  const post = useSelector((store) => store.AllPost.CurrentAccount);
  const showMenu = useSelector((store) => store.Ui.showSideBar);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setInterval(function () {
      let width = window.innerWidth;
      if (width > 1003) {
        dispatch(uiStoreAction.setSideBarToTrue());
      }
    }, 1000); //this is to check after every 1 sec
  });

  const sideBarItem = [
    {
      id: "user",
      text: post.name,
      icons: post.profileImg,
    },
    {
      id: "friends",
      text: "Friends",
      icons: friends,
    },
    {
      id: "market",
      text: "Marketplace",
      icons: MarketPlace,
    },
    {
      id: "recent",
      text: "Most Recent",
      icons: MostRecent,
    },
    {
      id: "groups",
      text: "Groups",
      icons: group,
    },
    {
      id: "watch",
      text: "Watch",
      icons: watch,
    },
    {
      id: "See More",
      text: "See More",
      icons: seeMoreIcon,
    },
  ];

  const sideBarShortcut = [
    {
      id: "Code house",
      text: "Code house",
      icons: iconUP,
    },
    {
      id: "Eminem fan house ",
      text: "Eminem Fan Club",
      icons: iconUP,
    },
  ];

  const items = sideBarItem.map((items) => {
    return (
      <MiddleSideBar
        key={items.id}
        id={items.id}
        text={items.text}
        icons={items.icons}
      />
    );
  });

  const shortCutItem = sideBarShortcut.map((items) => {
    return (
      <MiddleSideBar
        key={items.id}
        id={items.id}
        text={items.text}
        icons={items.icons}
      />
    );
  });

  return (
    <div
      className="sidebar"
      style={{ display: `${showMenu ? "inline-block" : "none"}` }}
    >
      <div className="sidebar-top">
        <img src={FBlogo} alt="Logo" style={{ cursor: "pointer" }} />
        <div className="searchBar-section">
          <img src={SearchIcon} alt="search" />
          <input
            type="text"
            placeholder="search facebook"
            className="searchInput"
            style={{ color: "white" }}
          />
        </div>
      </div>
      <div className="sidebar-content">
        <div className="side-items">{items}</div>
        <div className="side-shortcut">
          <span>Your shortcuts</span>
          {shortCutItem}
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>
          {" "}
          Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta ©
          2023 · @Nathjoeetim{" "}
        </p>
      </div>
    </div>
  );
}

export default SideBar;
