import React from "react";
function Status(props) {
  return(
    <div>
      <div className="currentData">
        <div>Current_X : <span id="r_x">{props.currentX}</span></div>
        <div>Current_Y : <span id="r_y">{props.currentY}</span></div>
        <div>Direction : <span id="r_d">{props.currentDirection}</span></div>
      </div>
    </div>
  );
}
export default Status;
