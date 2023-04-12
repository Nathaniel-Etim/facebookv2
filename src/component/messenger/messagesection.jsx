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
          <span className="details-message">Hello sir .</span>
        </div>
        <div className="receiver-details">
          <img
            src={userChat.profileImg}
            alt="received user icon"
            className="details-img"
          />
          <span className="details-message">How are u doing?? .</span>
        </div>
      </div>
      <div className="message-sent">
        <span className="sent-message"> hello </span>{" "}
        <img
          src={sendersDetails.profileImg}
          alt="received user icon"
          className="currentuser-img"
        />
      </div>
      <div className="message-sent">
        <span className="sent-message"> i am doing great .... you ? </span>{" "}
        <img
          src={sendersDetails.profileImg}
          alt="received user icon"
          className="currentuser-img"
        />
      </div>
      <div className="receiver-details">
        <img
          src={userChat.profileImg}
          alt="received user icon"
          className="details-img"
        />
        <span className="details-message">I am doing great sir.</span>
      </div>
      <div className="receiver-details">
        <img
          src={userChat.profileImg}
          alt="received user icon"
          className="details-img"
        />
        <span className="details-message">
          I heard about the news regarding your family .. hope ypu are coping
          fine
        </span>
      </div>
      <div className="message-sent">
        <span className="sent-message">
          Yeah sure i am ... how is your family ?
        </span>{" "}
        <img
          src={sendersDetails.profileImg}
          alt="received user icon"
          className="currentuser-img"
        />
      </div>
      <div className="message-sent">
        <span className="sent-message">
          Hope Samuel has finished school .. cause he has to pay back the money
          he owes me
        </span>{" "}
        <img
          src={sendersDetails.profileImg}
          alt="received user icon"
          className="currentuser-img"
        />
      </div>{" "}
      <div className="receiver-details">
        <img
          src={userChat.profileImg}
          alt="received user icon"
          className="details-img"
        />
        <span className="details-message">I am doing great sir.</span>
      </div>
      <div className="receiver-details">
        <img
          src={userChat.profileImg}
          alt="received user icon"
          className="details-img"
        />
        <span className="details-message">Nice hearing form you sir.</span>
      </div>
      <div className="message-sent">
        <span className="sent-message">nice hearing from you</span>{" "}
        <img
          src={sendersDetails.profileImg}
          alt="received user icon"
          className="currentuser-img"
        />
      </div>{" "}
    </div>
  );
}

export default MessageSection;
