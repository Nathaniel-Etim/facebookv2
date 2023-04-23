import React from "react";
import "./messengerSideBar.css";
import messenger from "../../props/messageing/Logomessenger.svg";
import chat from "../../props/messageing/chat.svg";
import people from "../../props/messageing/people.svg";
import shopaddicon from "../../props/messageing/shopaddicon.svg";
import archiveIcon from "../../props/messageing/archiveIcon.svg";
import documentforward from "../../props/messageing/documentforward.svg";
import Logout from "../../props/messageing/Logout.svg";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { postAction } from "../../store/postStore";
import { uiStoreAction } from "../../store/UI";

function MessageSideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((store) => store.AllPost.CurrentAccount);

  function onShowChatUserHandeler() {
    navigate("/messenger");
  }

  function onLogUserOutHandelerFn() {
    navigate("/");
    dispatch(postAction.getCurrentAccountDetails(``));
    dispatch(uiStoreAction.setIsLogin());
  }

  return (
    <Card className="messenger-sidebar">
      <div className="sidebar-top">
        <div className="top">
          <img src={messenger} alt="messenger icon" className="logo" />
          <div className="sidebar-middle">
            <div className="middle-items" onClick={onShowChatUserHandeler}>
              <img className="itemIcon" src={chat} alt="chat" />
              <span>Chat</span>
            </div>
            <div className="middle-items">
              <img className="itemIcon" src={people} alt="People" />
              <span>People</span>
            </div>
            <div className="middle-items">
              <img className="itemIcon" src={shopaddicon} alt="Shop" />
              <span>Shop</span>
            </div>
            <div className="middle-items">
              <img className="itemIcon" src={documentforward} alt="Request" />
              <span>Request</span>
            </div>
            <div className="middle-items">
              <img className="itemIcon" src={archiveIcon} alt="archeive" />
              <span>Archeive</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <img src={post.profileImg} alt="user-profile" />
          <img
            src={Logout}
            alt="user-logout"
            onClick={onLogUserOutHandelerFn}
          />
        </div>
      </div>
      <Outlet />
    </Card>
  );
}

export default MessageSideBar;
