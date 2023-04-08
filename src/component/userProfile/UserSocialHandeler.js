import React from "react";
import "./usersocial.css";
// src\component\userProfile\usersocial.css
import {
  BsMarkdown,
  BsMailbox,
  BsCardHeading,
  BsArrowReturnRight,
  BsInfoCircleFill,
  BsThreeDots,
} from "react-icons/bs";

function UserSocialHandeler() {
  return (
    <>
      <div className="usersocial-container">
        <span className="usersocial-item">
          {" "}
          <BsMarkdown /> <strong>824k </strong>followers{" "}
        </span>
        <span className="usersocial-item">
          {" "}
          <BsInfoCircleFill /> <strong>Page </strong> News & media website
        </span>
        <span className="usersocial-item">
          {" "}
          <BsArrowReturnRight />
          Lagos, Nigeria{" "}
        </span>
        <span className="usersocial-item">
          {" "}
          <BsMailbox /> 824k followers{" "}
        </span>
        <span className="usersocial-item">
          {" "}
          <BsCardHeading /> Natha@gmail.com{" "}
        </span>
        <span className="usersocial-item">
          {" "}
          <BsThreeDots />
          See userName About Info{" "}
        </span>
      </div>
    </>
  );
}

export default UserSocialHandeler;
