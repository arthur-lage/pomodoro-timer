import "./Actions.css";
import React from "react";

import { useCountdown } from "../context/Countdown";

function Actions() {
  const { time, setTime, setIsActive } = useCountdown();

  const clearActiveClass = () => {
    document.getElementById("focus-mode").classList.remove("active")
    document.getElementById("short-break").classList.remove("active")
    document.getElementById("long-break").classList.remove("active")
  }

  return (
    <div className="actions">
      <button className="action active" id="focus-mode" onClick={() => {
        setTime(25 * 60); 
        setIsActive(false);
        clearActiveClass()
        document.getElementById("focus-mode").classList.add("active")
      }}>FOCUS MODE</button>
      <button className="action" id="short-break" onClick={() => {
        setTime(5 * 60); 
        setIsActive(false);
        clearActiveClass()
        document.getElementById("short-break").classList.add("active")
        }}>SHORT BREAK</button>
      <button className="action" id="long-break" onClick={() => {
        setTime(15 * 60); 
        setIsActive(false);
        clearActiveClass()
        document.getElementById("long-break").classList.add("active")
      }}>LONG BREAK</button>
    </div>
  );
}

export default Actions;
