import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Home from "../../props/homenew.png";
import Reels from "../../props/ReelsIcons.png";
import MarketPlace from "../../props/MarketPlace.png";
import Friends from "../../props/friends.png";
import game from "../../props/GameIcon.png";
import menu from "../../props/menu.png";
import messenger from "../../props/nessenger.png";
import bell from "../../props/bell.png";
import { useSelector, useDispatch } from "react-redux";
import { uiStoreAction } from "../../store/UI";

function NavBar() {
  const post = useSelector((store) => store.AllPost.CurrentAccount);
  const dispatch = useDispatch();

  function onShowMenuHandeler() {
    dispatch(uiStoreAction.toggleSideBarHandeler());
  }

  return (
    <div className="navbar-container">
      <div className="nav-cover">
        <div className="nav-left">
          <div className="laft-item ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
              end
            >
              <img src={Home} alt="home btn" className="NavIcon" />
            </NavLink>
          </div>

          <div className="laft-item">
            <NavLink
              to="/reels"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
              end
            >
              <img src={Reels} alt="home btn" className="NavIcon" />
            </NavLink>
          </div>

          <div className="laft-item">
            <img src={MarketPlace} alt="home btn" className="NavIcon" />
          </div>
          <div className="laft-item">
            <img src={Friends} alt="home btn" className="NavIcon" />
          </div>
          <div className="laft-item game">
            <img src={game} alt="home btn" className="NavIcon" />
          </div>
          <div className="laft-item  menu">
            <img
              src={menu}
              alt="home btn"
              className="right-icon"
              onClick={onShowMenuHandeler}
            />
          </div>
        </div>
        <div className="nav-right">
          <div className="right-item right-menu">
            <img
              src={menu}
              alt="home btn"
              className="right-icon "
              onClick={onShowMenuHandeler}
            />
          </div>
          <NavLink
            to="messenger"
            className={({ isActive }) => (isActive ? "active" : "notActive")}
            end
          >
            <div className="right-item">
              <img src={messenger} alt="home btn" className="right-icon" />
            </div>
          </NavLink>
          <div className="right-item">
            <img src={bell} alt="home btn" className="right-icon bell" />
          </div>
          <div className="right-item">
            <img src={post.profileImg} alt="home btn" className="right-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
