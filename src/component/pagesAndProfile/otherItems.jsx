import React from "react";
import Card from "../card/Card";
import "./pagesProfile.css";
import Figma from "../../props/pple-and-profile/figmaicon.png";
import Anouncment from "../../props/pple-and-profile/alarmicon.png";

function PagesandProfile() {
  return (
    <div>
      <Card className="pages-card">
        <div className="pager">
          <div className="pages-header">
            <span>Your Pages and profiles</span>
          </div>
          <div className="pages-content">
            <div className="pages-name">
              <div className="col2">
                <div>
                  <img src={Figma} alt="figma icon" className="figmaicon" />
                </div>
                <div className="text">
                  <span className="text1">Figma</span>
                  <span className="text2">@figmadesign</span>
                </div>
              </div>
            </div>
            <div className="anouncment-icon">
              <img src={Anouncment} alt="anouncement" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PagesandProfile;
