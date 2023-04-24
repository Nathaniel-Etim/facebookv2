import React from "react";
import "./loginSection.css";
import Card from "../card/Card";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../../store/postStore";
import { uiStoreAction } from "../../store/UI";
import { useNavigate } from "react-router-dom";

function LoginasUser() {
  const users = useSelector((store) => store.AllPost.accounts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    function handelBeforeUpload(event) {
      event.preventDefault();
      event.returnValue = " ";
      navigate("/");
    }

    window.addEventListener("beforeinput", handelBeforeUpload);

    return () => {
      window.removeEventListener("beforeinput", handelBeforeUpload);
    };
  }, []);

  const allAccount = users.map((element) => {
    function onLoginUserHandelerfn() {
      dispatch(postAction.getCurrentAccountDetails(element.name));
      dispatch(uiStoreAction.setIsLogin());
      navigate("/userFeed");
    }

    return (
      <Card className="card" key={element.name}>
        <div className="cardder" onClick={onLoginUserHandelerfn}>
          <div className="userThreeDot">
            <BsThreeDotsVertical className="dotted" />
          </div>
          <div className="userinfo">
            <img
              src={element.profileImg}
              alt="userdp"
              className="info-userdp"
            />
            <span className="info-username">{element.name}</span>
            <span className="info-notification">{`${element.publication.likes} new notification`}</span>
          </div>
        </div>
      </Card>
    );
  });

  return <div className="userContainer">{allAccount}</div>;
}

export default LoginasUser;
