/* eslint-disable no-unused-expressions */
import React from "react";
import NavTitle from "./NavTitle";
import NavInstruct from "./NavInstruct";
import Score from "./Score";

function NavBar(props) {
    console.log("--",props)
    return (
    <div className = "nav">
        <div className = "col-md-4">
          <NavTitle />
          </div>
          <div className = "col-md-4">
          <NavInstruct />
          </div>
          <div className = "col-md-4">
          <Score 
            score = {props.score} 
            topScore = {props.topScore}
          />
          </div>
    </div>
    );
}

export default NavBar;