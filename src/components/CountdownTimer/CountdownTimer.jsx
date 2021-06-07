import { CountdownTimerContainer } from './styles.js'

import React, { useContext } from "react";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useCountdown } from '../../context/Countdown'
import { ThemeContext } from 'styled-components';

function CountdownTimer() {

  const { colors } = useContext(ThemeContext)

  const { startingValue, time, isActive, stopCountdown, startCountdown, minutes, seconds } = useCountdown()
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, 0).split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, 0).split('')

  document.title = `Pomodoro Timer - ${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`

  return (
    <CountdownTimerContainer>
      <div className="countdown">
        <CircularProgressbarWithChildren
          strokeWidth={3}
          maxValue={startingValue}
          value={time / 1}
          styles={buildStyles({
            strokeLinecap: "round",
            pathColor: colors.progressbar,
            trailColor: "#d6d6d6",
          })}
        >
          <div className="time">
            <span className="min-left">{minuteLeft}</span>
            <span className="min-right">{minuteRight}</span>
            <span>:</span>
            <span className="sec-left">{secondLeft}</span>
            <span className="sec-right">{secondRight}</span>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      {isActive ? (
        <button className="button stop" onClick={stopCountdown}>
          PAUSE
        </button>
      ) : (
        <button className="button start" onClick={startCountdown}>
          START
        </button>
      )}
    </CountdownTimerContainer>
  );
}

export default CountdownTimer;
