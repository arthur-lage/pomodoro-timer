import "./Actions.css";
import React, { useEffect } from "react";

import { useCountdown } from "../context/Countdown";

function Actions() {
  const { setTime, setIsActive, setStartingValue, currentMode } = useCountdown();

  const clearActiveClass = () => {
    document.getElementById("focus-mode").classList.remove("active");
    document.getElementById("short-break").classList.remove("active");
    document.getElementById("long-break").classList.remove("active");
  };

  useEffect(() => {
    if(currentMode === "focus-mode"){
      clearActiveClass()
      document.getElementById("focus-mode").classList.add("active");
    } else if (currentMode === "short-break"){
      clearActiveClass()
      document.getElementById("short-break").classList.add("active");
    } else if (currentMode === "long-break"){
      clearActiveClass()
      document.getElementById("long-break").classList.add("active");
    }
  }, [currentMode])

  return (
    <div className="actions">
      <button
        className="action active"
        id="focus-mode"
        onClick={() => {
          setIsActive(false);
          setTimeout(() => {
            setTime(25 * 60);
            setStartingValue(25 * 60);
          }, 100);
          clearActiveClass();
          document.getElementById("focus-mode").classList.add("active");
        }}
      >
        FOCUS MODE
      </button>
      <button
        className="action"
        id="short-break"
        onClick={() => {
          setIsActive(false);
          setTimeout(() => {
            setTime(5 * 60);
            setStartingValue(5 * 60);
          }, 100);
          clearActiveClass();
          document.getElementById("short-break").classList.add("active");
        }}
      >
        SHORT BREAK
      </button>
      <button
        className="action"
        id="long-break"
        onClick={() => {
          setIsActive(false);
          setTimeout(() => {
            setTime(15 * 60);
            setStartingValue(15 * 60);
          }, 100);
          clearActiveClass();
          document.getElementById("long-break").classList.add("active");
        }}
      >
        LONG BREAK
      </button>
    </div>
  );
}

export default Actions;
