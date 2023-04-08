import React from "react";
import "./messagesection.css";
import { useSelector } from "react-redux";

function MessageSection() {
  const sendersDetails = useSelector((store) => store.AllPost.CurrentAccount);
  const userChat = useSelector((store) => store.AllPost.CurrentAccountFriends);

  return (
    <div className="messages">
      <div className="message-received">
        <div className="receiver-details">
          <img
            src={userChat.profileImg}
            alt="received user icon"
            className="details-img"
          />
          <span className="details-message">Hi mr jeff .</span>
        </div>
      </div>
      <div className="message-sent">
        <span className="sent-message"> hello world </span>{" "}
        <img
          src={sendersDetails.profileImg}
          alt="received user icon"
          className="currentuser-img"
        />
      </div>
    </div>
  );
}

export default MessageSection;
