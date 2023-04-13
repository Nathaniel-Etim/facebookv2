import React from "react";
import "./middlesidebar.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postAction } from "../../../store/postStore";
import { uiStoreAction } from "../../../store/UI";

function MiddleSideBar({ id, text, icons }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const ownersAccount = useSelector((store) => store.AllPost.CurrentAccount);
  // const allAccount = useSelector((store) => store.AllPost.accounts);

  function onClickItemHandelerFn() {
    if (id === "See More") {
      console.log("see more");
    }

    if (id === "user") {
      dispatch(
        postAction.toChatDetail({
          id: id,
          name: text,
          profileImg: icons,
        })
      );

      dispatch(uiStoreAction.setSideBarToFalse());

      navigate("/userProfile");
    }
    dispatch(uiStoreAction.setSideBarToFalse());
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
