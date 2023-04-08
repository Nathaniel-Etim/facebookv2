import React from "react";
import Card from "../card/Card";
import "./feedHead.css";
import Stories from "../../props/Stories.png";
import Reels from "../../props/ReelsMid.png";
import AddStory from "../../props/AddStory.png";
import ownerPost from "../../props/ownerPost.png";
import statusUser1 from "../../props/statusUser1.png";
import statusUser2 from "../../props/statusUser2.png";
import storyImage3 from "../../props/storyImage3.png";
import storyPost from "../../props/storyPost.png";
import storyPost1 from "../../props/storyPost1.png";

const peopelsStory = [
  {
    backgroundimg: storyPost1,
    userProfileImg: statusUser2,
    userName: "Jonas",
  },
  {
    backgroundimg: storyPost,
    userProfileImg: statusUser1,
    userName: "Nathaniel Etim",
  },
  {
    backgroundimg: storyPost1,
    userProfileImg: storyImage3,
    userName: "Jonah Edet",
  },
];

function FeedHead() {
  const story = peopelsStory.map((data, index) => {
    return (
      <div
        key={index}
        className="otherstory-container"
        style={{ backgroundImage: `url(${data.backgroundimg})` }}
      >
        <img src={data.userProfileImg} alt="plussign" />
        <span>{data.userName} </span>
      </div>
    );
  });

  return (
    <div style={{ width: "100%" }}>
      <Card className="feedHeader-card">
        <div className="feedHeader-top">
          <div className="feedHead-topstory">
            <img src={Stories} alt="stories botton " />
            <span>Stories</span>
          </div>
          <div className="feedHead-topreels">
            <img src={Reels} alt="stories botton " />
            <span>Reels</span>
          </div>
        </div>
        {/* story section */}
        <div className="userStory-container">
          <div className="story-section">
            <div
              className="userstory-container"
              style={{ backgroundImage: `url(${ownerPost})` }}
            >
              <img src={AddStory} alt="plussign" />
              <span> Create Story </span>
            </div>
            {story}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default FeedHead;
