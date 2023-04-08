import React from "react";
import "./yourmind.css";
import Card from "../card/Card";
import userProfilePicture from "../../props/userProfilePicture.png";
import liveVideo from "../../props/liveVideo.png";
import photoVideo from "../../props/photoVideo.png";
import feelingActivity from "../../props/feelingActivity.png";
import { useSelector } from "react-redux";

function PostYourMind() {
  const CurrentAccount = useSelector((store) => store.AllPost.CurrentAccount);

  return (
    <div style={{ width: "100%" }}>
      <Card className="PostYourMind-card">
        <div className="PostYourMind-top">
          <img src={CurrentAccount.profileImg} alt="user dp" />
          <input
            type="text"
            placeholder={`what's on your mind, ${CurrentAccount.name}`}
          />
        </div>
        <div className="PostYourMind-bottom">
          <div className="bottom-activities">
            <img src={liveVideo} alt="live video icon " />
            <span>Live video</span>
          </div>
          <div className="bottom-activities">
            <img src={photoVideo} alt="pics  " />
            <span>Live video</span>
          </div>
          <div className="bottom-activities">
            <img src={feelingActivity} alt="feeling / activities" />
            <span>Live video</span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PostYourMind;
