import React from "react";
import "./feed.css";
import FeedHead from "./feedHead";
import PostYourMind from "./yourMind";
import UserPost from "./userPost";
import PagesandProfile from "../pagesAndProfile/otherItems";
import Birthdays from "../pagesAndProfile/birthdays";
import Contacts from "../pagesAndProfile/contacts";
import Write from "../../props/pple-and-profile/writeiocn.png";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../store/postStore";

function Feed() {
  const post = useSelector((store) => store.AllPost.CurrentAccount);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postAction.getCurrentAccountDetails("Andrew sauel"));
  });

  console.log(post);
  return (
    <div className="feed">
      <div className="feed-container">
        <FeedHead />
        <PostYourMind />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
      </div>
      <div className="other-items">
        <PagesandProfile />
        <Birthdays />
        <Contacts />
        <div className="writer">
          <img src={Write} alt="hello world" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
