import React from "react";
import "./photos.css";

function UserPhotoSection() {
  return (
    <div className="userphoto-container">
      <div className="userphoto">
        <div className="photo-text">
          <h4> Photos </h4>
        </div>
        <div className="photo">
          <span> No photo </span>
        </div>
        <div className="photo-btn">
          <h4> See all photos </h4>
        </div>
      </div>
      <div className="post-text">
        <h4> Post </h4>
      </div>
    </div>
  );
}

export default UserPhotoSection;
