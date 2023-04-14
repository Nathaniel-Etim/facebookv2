import React from "react";
import "./reelsPage.css";
import ReelsContainer from "../../component/Reels/ReelContainer";

function ReelsPage() {
  return (
    <div className="reelsContainer">
      <ReelsContainer />
      <ReelsContainer />
    </div>
  );
}

export default ReelsPage;
