import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const CountdownContext = createContext();

let countdownTimeout = undefined;

export default function CountdownProvider({ children }) {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [startingValue, setStartingValue] = useState(25 * 60);
  const [currentMode, setCurrentMode] = useState("focus-mode");
  const [currentCycle, setCurrentCycle] = useState(0);

  let nowMode;
  let nextMode;

  const alarm = new Audio("/alarm.mp3");
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const nowModeRef = useRef(nowMode);
  const nextModeRef = useRef(nextMode);
  const alarmRef = useRef(alarm);

  function startCountdown() {
    setIsActive(true);
  }

  function stopCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(time);
  }

  function showNotification() {
    const notification = new Notification("Pomodoro Timer", {
      body: `A ${nowModeRef.current} cycle has finished. Come back to start a new ${nextModeRef.current} cycle!`,
    });

    if (notification) return;
  }

  function onTimeIsOverHandler(newMode, newTime, newCurrentCycle) {
    setCurrentMode(newMode);
    setTime(newTime * 60);
    setStartingValue(newTime * 60);
    setCurrentCycle(newCurrentCycle);
  }

  useEffect(() => {
    if (currentMode === "focus-mode") nowModeRef.current = "FOCUS MODE";
    if (currentMode === "short-break") nowModeRef.current = "SHORT BREAK";
    if (currentMode === "long-break") nowModeRef.current = "LONG BREAK";

    if (currentMode === "focus-mode" && currentCycle < 7)
      nextModeRef.current = "SHORT BREAK";
    if (currentMode === "short-break" && currentCycle < 7)
      nextModeRef.current = "FOCUS MODE";
    if (currentMode === "focus-mode" && currentCycle === 7)
      nextModeRef.current = "LONG BREAK";
    if (currentMode === "short-break" && currentCycle === 7)
      nextModeRef.current = "LONG BREAK";
    if (currentMode === "long-break" && currentCycle === 8)
      nextModeRef.current = "FOCUS MODE";
  }, [currentCycle, currentMode]);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      const modalOverlay = document.querySelector(".modal-overlay");
      setIsActive(false);
      alarmRef.current.play();
      modalOverlay.classList.replace("hidden", "active");

      if (currentMode === "focus-mode" && currentCycle < 7)
        onTimeIsOverHandler("short-break", 5, currentCycle + 1);

      if (currentMode === "short-break" && currentCycle < 7)
        onTimeIsOverHandler("focus-mode", 25, currentCycle + 1);

      if (
        (currentMode === "focus-mode" && currentCycle === 7) ||
        (currentMode === "short-break" && currentCycle === 7)
      )
        onTimeIsOverHandler("long-break", 15, currentCycle + 1);

      if (currentCycle === 8) onTimeIsOverHandler("focus-mode", 25, 0);

      setTimeout(() => {
        modalOverlay.classList.replace("active", "hidden");
        alarmRef.current.pause();
      }, 7500);

      if (Notification.permission === "granted") {
        showNotification();
      }
    }
  }, [isActive, time, minutes, seconds, currentCycle, currentMode]);

  return (
    <CountdownContext.Provider
      value={{
        time,
        setTime,
        isActive,
        setIsActive,
        stopCountdown,
        startCountdown,
        minutes,
        seconds,
        startingValue,
        setStartingValue,
        alarmRef,
        nowModeRef,
        nextModeRef,
        currentCycle,
        currentMode,
        setCurrentMode,
        setCurrentCycle,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown() {
  const context = useContext(CountdownContext);
  const {
    time,
    setTime,
    isActive,
    setIsActive,
    stopCountdown,
    startCountdown,
    minutes,
    seconds,
    startingValue,
    setStartingValue,
    alarmRef,
    nowModeRef,
    nextModeRef,
    currentCycle,
    currentMode,
    setCurrentMode,
    setCurrentCycle,
  } = context;
  return {
    time,
    setTime,
    isActive,
    setIsActive,
    stopCountdown,
    startCountdown,
    minutes,
    seconds,
    startingValue,
    setStartingValue,
    alarmRef,
    nowModeRef,
    nextModeRef,
    currentCycle,
    currentMode,
    setCurrentMode,
    setCurrentCycle,
  };
}
