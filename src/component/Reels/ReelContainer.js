import React from "react";
import ReelImg from "../../props/reels-Img/reels-img.png";
import musicIcon from "../../props/reels-Img/music-icon.png";
import cameraIcon from "../../props/reels-Img/cameraIcon-reel.png";
import MenuIcon from "../../props/reels-Img/MenuIcon-reel.png";
import Likeicon from "../../props/Likeicon.png";
import Commenticon from "../../props/Commenticon.png";
import Shareicon from "../../props/Shareicon.png";
import userDp from "../../props/pple-and-profile/aidancontact.png";
import "./reelcontainer.css";

function ReelsContainer() {
  return (
    <div className="reels-container">
      <div className="reel-item" style={{ backgroundImage: `url(${ReelImg})` }}>
        <div className="reelspost-details">
          <div className="details-areas">
            <div className="user-details">
              <div className="details-image">
                <img src={userDp} alt="user dp" className="image-dp" />
              </div>
              <span> Nathaniel Etim </span>
            </div>
            <span className="area-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor numbas sator... more{" "}
            </span>
            <div className="area-music">
              <img src={musicIcon} alt="solfa icon" />
              <span className="music-text">Page name · Original Audio</span>
            </div>
          </div>
          <div className="icons-area">
            <div className="reels-icon">
              <img src={Likeicon} alt="camera icon" className="area-icon" />
            </div>
            <div className="reels-icon">
              <img src={Commenticon} alt="camera icon" className="area-icon" />
            </div>
            <div className="reels-icon">
              <img src={Shareicon} alt="camera icon" className="area-icon" />
            </div>
            <div className="reels-icon">
              <img src={MenuIcon} alt="camera icon" className="area-icon" />
            </div>
            <div className="reels-icon">
              <img src={userDp} alt="camera icon" className="area-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReelsContainer;
