import React from "react";
import "./searched.css";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../store/postStore";
import { useNavigate } from "react-router-dom";
import { uiStoreAction } from "../../store/UI";

function Searched(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchedUserDetails = useSelector(
    (store) => store.AllPost.searchedAccount
  );

  function OnGoToUserProfileHandelerFn() {
    dispatch(postAction.toChatDetail(searchedUserDetails));
    props.clearValue("");
    props.hideBar(false);

    if (window.innerWidth < 1004) {
      dispatch(uiStoreAction.setSideBarToFalse());
    }

    navigate("/userProfile");
  }

  return (
    <div className="searched">
      <div
        key={searchedUserDetails.name}
        className="contact-bottom"
        onClick={OnGoToUserProfileHandelerFn}
      >
        <div className="my-searched">
          <div className="contact-details">
            <img src={searchedUserDetails.profileImg} alt="userName" />
          </div>
          <div className="namemers">
            <span className="nameername"> {searchedUserDetails.name} </span>
            <span className="nameerfriends">15 mutual friends</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searched;
