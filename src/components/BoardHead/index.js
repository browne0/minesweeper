import React from "react";
import PropTypes from "prop-types";

const BoardHead = props => {
  return (
    <div className="board-head">
      <div className="flag-count">
        {props.flagsUsed}
      </div>
      <button className="reset" onClick={props.reset}>Reset</button>
      <div className="timer">{props.time}</div>
    </div>
  )
};

BoardHead.propTypes = {
  time: PropTypes.number.isRequired,
  flagsUsed: PropTypes.number.isRequired
}

export default BoardHead;