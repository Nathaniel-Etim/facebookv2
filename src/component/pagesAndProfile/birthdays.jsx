import React from "react";
import "./birthdays.css";
import Card from "../card/Card";
import birthdayicon from "../../props/pple-and-profile/birthdayicon.png";

function Birthdays() {
  return (
    <div>
      <Card className="birthday-card ">
        <div className="pager">
          <div className="header">Birthdays</div>
          <div className="others">
            <div className="cakeimag">
              <img src={birthdayicon} alt="Birthaday cake" />
            </div>
            <span className="text">
              {" "}
              Clara Cross and 2 others have birthdays today.{" "}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default Birthdays;
