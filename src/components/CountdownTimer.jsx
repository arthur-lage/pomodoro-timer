import "./CountdownTimer.css";

import React from "react";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useCountdown } from '../context/Countdown'

function CountdownTimer() {

  const {time, setTime, isActive, setIsActive} = useCountdown()

  const buttonHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="countdown-timer">
      <div className="countdown">
        <CircularProgressbarWithChildren
          strokeWidth={3}
          value={23}
          styles={buildStyles({
            strokeLinecap: "round",
            pathColor: "rgb(255, 86, 74)",
            trailColor: "#d6d6d6",
          })}
        >
          <div className="time">
            <span className="min-left">1</span>
            <span className="min-right">4</span>
            <span>:</span>
            <span className="sec-left">5</span>
            <span className="sec-right">6</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      {isActive ? (
        <button className="button stop" onClick={buttonHandler}>
          STOP
        </button>
      ) : (
        <button className="button start" onClick={buttonHandler}>
          START
        </button>
      )}
    </div>
  );
}

export default CountdownTimer;
