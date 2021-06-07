import React, { useEffect } from "react";

import { useCountdown } from "../../context/Countdown";

import { ActionsContainer, ChangingAlert } from "./styles.js";

function Actions() {
  const {
    setTime,
    setIsActive,
    setStartingValue,
    currentMode,
    setCurrentMode,
    setCurrentCycle,
  } = useCountdown();

  const clearActiveClass = () => {
    document.getElementById("focus-mode").classList.remove("active");
    document.getElementById("short-break").classList.remove("active");
    document.getElementById("long-break").classList.remove("active");
  };

  const setActiveClass = (id) => {
    document.getElementById(id).classList.add("active");
  };

  useEffect(() => {
    if (currentMode === "focus-mode") {
      clearActiveClass();
      setActiveClass("focus-mode");
      setCurrentMode("focus-mode");
      setCurrentCycle(0);
    } else if (currentMode === "short-break") {
      clearActiveClass();
      setActiveClass("short-break");
      setCurrentMode("short-break");
      setCurrentCycle(0);
    } else if (currentMode === "long-break") {
      clearActiveClass();
      setActiveClass("long-break");
      setCurrentMode("long-break");
      setCurrentCycle(4);
    }
  }, [currentMode, setCurrentCycle, setCurrentMode]);

  return (
    <div>
      <ActionsContainer>
        <button
          className="action active"
          id="focus-mode"
          onClick={() => {
            setIsActive(false);
            document.getElementById("changing-alert").classList.replace("hidden", "active")
            setTimeout(() => {
              setTime(25 * 60);
              setStartingValue(25 * 60);
              document.getElementById("changing-alert").classList.replace("active", "hidden")
            }, 800);
            clearActiveClass();
            document.getElementById("focus-mode").classList.add("active");
            setCurrentMode("focus-mode");
          }}
        >
          FOCUS MODE
        </button>
        <button
          className="action"
          id="short-break"
          onClick={() => {
            setIsActive(false);
            document.getElementById("changing-alert").classList.replace("hidden", "active")
            setTimeout(() => {
              setTime(5 * 60);
              setStartingValue(5 * 60);
              document.getElementById("changing-alert").classList.replace("active", "hidden")
            }, 800);
            clearActiveClass();
            document.getElementById("short-break").classList.add("active");
            setCurrentMode("short-break");
          }}
        >
          SHORT BREAK
        </button>
        <button
          className="action"
          id="long-break"
          onClick={() => {
            setIsActive(false);
            document.getElementById("changing-alert").classList.replace("hidden", "active")
            setTimeout(() => {
              setTime(15 * 60);
              setStartingValue(15 * 60);
              document.getElementById("changing-alert").classList.replace("active", "hidden")
            }, 800);
            clearActiveClass();
            document.getElementById("long-break").classList.add("active");
            setCurrentMode("long-break");
          }}
        >
          LONG BREAK
        </button>

        <ChangingAlert>
        <p id="changing-alert" className="hidden">Changing...</p>
      </ChangingAlert>
      </ActionsContainer>

    </div>
  );
}

export default Actions;
