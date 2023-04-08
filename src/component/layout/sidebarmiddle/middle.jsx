import React from "react";
import "./middlesidebar.css";

function MiddleSideBar({ id, text, icons }) {
  function onClickItemHandelerFn() {
    if (id === "See More") {
      console.log("see more");
    }
  }

  return (
    <>
      <div className="middlesidebar">
        <div className="middle-item" onClick={onClickItemHandelerFn}>
          <img src={icons} alt="user dp" />
          <h5>{text}</h5>
        </div>
      </div>
    </>
  );
}

export default MiddleSideBar;
