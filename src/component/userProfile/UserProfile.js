import React from "react";
import icon from "../../props/messageing/infocircle.png";
import { BsSaveFill, BsMessenger } from "react-icons/bs";
import UserSocialHandeler from "./UserSocialHandeler";
import UserPhotoSection from "./photo";
import "./userprofile.css";
import { useNavigate } from "react-router-dom";
import UserPost from "../feed/userPost";
import { useSelector } from "react-redux";

function UserProfileTop() {
  const navigate = useNavigate();
  const ProfileDetails = useSelector(
    (store) => store.AllPost.CurrentAccountFriends
  );

  function onMessageUserHandeler() {
    navigate("/messenger/messages");
  }

  const profileContent = ProfileDetails?.profilecontent;

  return (
    <>
      <div className="userprofile-container">
        <div className="userprofile-coverimage">
          <img
            src="https://images.unsplash.com/photo-1608408843596-b3119736057c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="user dp"
            className="cover-image"
          />
        </div>
        <div className="about-user">
          <img
            src={ProfileDetails.profileImg}
            alt="user dp"
            className="icons profilepics"
          />
          <div className="user-info">
            <h3 className="user-name">{ProfileDetails.name}</h3>
            <div className="user-otherdetails">
              <p> @{ProfileDetails.name} </p>
              <p>{profileContent?.about}</p>
            </div>
          </div>
        </div>
        <div className="message-area">
          <h3 className="message btn" onClick={onMessageUserHandeler}>
            <BsMessenger />
            message
          </h3>
          <BsSaveFill className="icons saved" />
          <img src={icon} alt="icon " className="icons menu-" />
        </div>
        <UserSocialHandeler />
        <UserPhotoSection />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
      </div>
    </>
  );
}

export default UserProfileTop;
