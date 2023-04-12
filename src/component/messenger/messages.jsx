import React from "react";
import "./messages.css";
import VideoCall from "../../props/messageing/videocall.svg";
import addsquareicon from "../../props/messageing/addsquareicon.svg";
import ChatContact from "./contacts";

function EveryMessenger() {
  return (
    <>
      <div className="every">
        <div className="every-top">
          <span className="top-text">Chart</span>
          <div className="top-image">
            <img src={VideoCall} alt="video call" />
            <img src={addsquareicon} alt="Add square" />
          </div>
        </div>
        <div className="input">
          <input type="text" placeholder="Search messenger" />
        </div>
        <ChatContact />
      </div>
    </>
  );
}

export default EveryMessenger;
