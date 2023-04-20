import React, { useState } from "react";
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
import { postAction } from "../../store/postStore";
import { uiStoreAction } from "../../store/UI";
import seeMoreIcon from "../../props/seeMoreIcon.png";
import { useSelector, useDispatch } from "react-redux";
import Searched from "../searched/searched";

function SideBar() {
  const post = useSelector((store) => store.AllPost.CurrentAccount);
  const allAccount = useSelector((store) => store.AllPost.accounts);
  const showMenu = useSelector((store) => store.Ui.showSideBar);
  const [inputValue, setInputValue] = useState("");

  const [allUsersName, setAllUserName] = useState([]);
  const dispatch = useDispatch();
  const [showSearchedUsers, setShowSearchUsers] = useState(false);

  React.useEffect(() => {
    setInterval(function () {
      let width = window.innerWidth;
      if (width > 1003) {
        dispatch(uiStoreAction.setSideBarToTrue());
      }
    }, 1000); //this is to check after every 1 sec

    const accountNames = allAccount.map((element) => {
      return element.name;
    });

    setAllUserName(accountNames);
  }, [allAccount]);

  function onSearchForUserHandelerFn(event) {
    const value = event.target.value;

    setInputValue(value);

    if (value === " " || value.length === 0) {
      setShowSearchUsers(false);
      return;
    } else {
      setShowSearchUsers(true);
      const searchedUser = allAccount.find((element) =>
        element.name.toLowerCase().startsWith(value.toLowerCase())
      );

      if (searchedUser) {
        dispatch(
          postAction.validateSearchDetails({
            id: searchedUser.name,
            name: searchedUser.name,
            profileImg: searchedUser.profileImg,
            profilecontent: searchedUser.profilecontent,
          })
        );
      }
    }
  }

  const containsName = allUsersName.some((name) =>
    name.toLowerCase().startsWith(inputValue.toLowerCase())
  );

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
            value={inputValue}
            placeholder="search facebook"
            className="searchInput"
            style={{ color: "white" }}
            onChange={onSearchForUserHandelerFn}
          />
        </div>
      </div>
      {showSearchedUsers && (
        <Searched clearValue={setInputValue} hideBar={setShowSearchUsers} />
      )}
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
