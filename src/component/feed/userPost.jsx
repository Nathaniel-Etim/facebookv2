import React, { useState } from "react";
import "./userPost.css";
import Card from "../card/Card";
import postImage from "../../props/postImage.png";
import globeImage from "../../props/globeImage.png";
import publicationImg from "../../props/publicationImg.png";
import Likeicon from "../../props/Likeicon.png";
import Commenticon from "../../props/Commenticon.png";
import { useSelector } from "react-redux";

import Shareicon from "../../props/Shareicon.png";

function UserPost() {
  const [isLiked, setIsLiked] = useState(false);
  const postDetails = useSelector((store) => store.AllPost.CurrentAccount);

  return (
    <div style={{ width: "100%" }}>
      <Card className="post-card">
        <div className="post-top">
          {/* user profile picture */}
          <img src={postImage} alt="post user" className="userdp" />
          <div className="postuser-details">
            {/*user Name  */}
            <span>The New York Times</span>
            <div className="post-undertext">
              <span>5h</span>
              <img src={globeImage} alt="post user" className="globe" />
            </div>
          </div>
        </div>
        <div className="publishedItems">
          <div className="post-text">
            {/* post text content */}
            <span>
              We consulted five design experts and tested gear in a
              275-square-foot apartment to find the best multifunctional decor
              to maximize space in a tiny bedroom.
            </span>
          </div>
          {/* the published image */}
          <img
            src={publicationImg}
            alt="publication img"
            className="Publicationimg"
          />
          <div className="likeshare-container">
            <div className="likearea">
              <img src={Likeicon} alt="like icon" className="likk isliked" />
              <span>Like</span>
            </div>{" "}
            <div className="likearea">
              <img src={Commenticon} alt="like icon" className="likk" />
              <span>Comment</span>
            </div>{" "}
            <div className="likearea">
              <img src={Shareicon} alt="like icon" className="likk" />
              <span>Share</span>
            </div>
          </div>
          <div className="comment">
            <div className="PostYourMind-top">
              <img
                src={postDetails.profileImg}
                alt="user dp"
                className="userImg"
              />
              <input
                type="text"
                placeholder={`Comment on New York times, ${postDetails.name} ?`}
                className="commentInput"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default UserPost;
