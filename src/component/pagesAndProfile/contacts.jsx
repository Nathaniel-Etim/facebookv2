import React from "react";
import "./contacts.css";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";
import videocallicon from "../../props/pple-and-profile/videocallicon.png";
import searchicon from "../../props/pple-and-profile/searchicon.png";
import settingicon from "../../props/pple-and-profile/settingicon.png";
import nessenger from "../../props/nessenger.png";
import { useSelector, useDispatch } from "react-redux";
import { postAction } from "../../store/postStore";

function Contacts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CurrentAccount = useSelector((store) => store.AllPost.CurrentAccount);
  const AllAccount = useSelector((store) => store.AllPost.accounts);

  const otherAccounts = AllAccount.filter((element) => {
    return element !== CurrentAccount;
  });

  const friends = otherAccounts.map((el) => {
    function onMessageUserHandeler() {
      dispatch(
        postAction.toChatDetail({
          id: el.name,
          name: el.name,
          profileImg: el.profileImg,
          profilecontent: el.profilecontent,
        })
      );

      navigate("/messenger");
    }

    function OnGoToUserProfileHandelerFn() {
      dispatch(
        postAction.toChatDetail({
          id: el.name,
          name: el.name,
          profileImg: el.profileImg,
          profilecontent: el.profilecontent,
        })
      );
      navigate("/userProfile");
    }

    return (
      <div
        key={el.name}
        className="contact-bottom"
        onClick={OnGoToUserProfileHandelerFn}
      >
        <div className="my-contacts">
          <div className="contact-details">
            <img src={el.profileImg} alt="userName" />
          </div>
          <div className="namemers">
            <span className="nameername"> {el.name} </span>
            <span className="nameerfriends">15 mutual friends</span>
          </div>
        </div>
        <div className="chat">
          <img
            src={nessenger}
            alt="userName"
            className="message"
            onClick={onMessageUserHandeler}
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      <Card className="contact-card">
        <div className="contact-top">
          <span>Contacts</span>
          <div className="contact-top-icons">
            <img src={videocallicon} alt="Video call" />
            <img src={searchicon} alt="Seach" />
            <img src={settingicon} alt="Setting" />
          </div>
        </div>
        <div className="contacts">
          {friends}
          <div className="seeMore">
            <span> View all </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Contacts;
