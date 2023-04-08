import React from "react";
import "./chatsection.css";
import MessageSection from "./messagesection";
import callicon from "../../props/messageing/callicon.svg";
import videocall from "../../props/messageing/videocall.svg";
import infocircle from "../../props/messageing/infocircle.png";
import menuIcon from "../../props/messageing/menu.png";
import camerabottomicon from "../../props/messageing/camerabottomicon.png";
import galleryicon from "../../props/messageing/galleryicon.png";
import videoiconcall from "../../props/messageing/videoiconcall.png";
import smileysbttomicon from "../../props/messageing/smileysbttomicon.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postAction } from "../../store/postStore";

function ChatSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userChat = useSelector((store) => store.AllPost.CurrentAccountFriends);

  function OnGoToUserProfileHandelerFn() {
    dispatch(
      postAction.toChatDetail({
        id: userChat.name,
        name: userChat.name,
        profileImg: userChat.profileImg,
        profilecontent: userChat.profilecontent,
      })
    );
    navigate("/userProfile");
  }

  if (Object.keys(userChat).length === 0) {
    return;
  }

  return (
    <div className="chatsection" id={userChat.id}>
      <div className="chat">
        <div className="chat-top">
          <div className="top-name" onClick={OnGoToUserProfileHandelerFn}>
            <img src={userChat.profileImg} alt="userprofile" />
            <span>{userChat.name}</span>
          </div>
          <div className="chat-topicon">
            <img className="topicons" src={callicon} alt="userprofile" />
            <img className="topicons" src={videocall} alt="userprofile" />
            <img className="topicons" src={infocircle} alt="userprofile" />
          </div>
        </div>
        <div className="chat-middle">
          <MessageSection />
        </div>
      </div>
      <div className="chat-bottom">
        <div className="bottom-left">
          <img src={menuIcon} className="left-icon" alt=" " />
          <img
            src={camerabottomicon}
            className="left-icon bottom-camera"
            alt=" "
          />
          <img src={galleryicon} className="left-icon bottom-gallary" alt=" " />
          <img
            src={videoiconcall}
            className="left-icon bottom-videocall"
            alt=" "
          />
        </div>
        <input placeholder="Message" />
        <img src={smileysbttomicon} className="bottom-righticon" alt=" " />
      </div>
    </div>
  );
}

export default ChatSection;
