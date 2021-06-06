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
  const [currentMode, setCurrentMode] = useState("focus-mode")
  const [currentCycle, setCurrentCycle] = useState(0)

  let nowMode;
  let nextMode;

  const nowModeRef = useRef(nowMode)
  const nextModeRef = useRef(nextMode)

  const alarm = new Audio("/alarm.mp3");
  const alarmRef = useRef(alarm);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if(currentCycle < 3 && currentMode === "focus-mode"){
      nowModeRef.current = "FOCUS MODE"
      nextModeRef.current = "SHORT BREAK"
    } if(currentCycle < 3 && currentMode === "focus-mode"){
      nowModeRef.current = "FOCUS MODE"
      nextModeRef.current = "SHORT BREAK"
    }
    else if(currentCycle === 3 && currentMode === "short-break"){
      nowModeRef.current = "SHORT BREAK"
      nextModeRef.current = "FOCUS MODE"
    } else if(currentCycle === 4 && currentMode === "long-break"){
      nowModeRef.current = "LONG BREAK"
      nextModeRef.current = "FOCUS MODE"
    }
  }, [currentCycle, currentMode])

  function startCountdown() {
    setIsActive(true);
  }

  function stopCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(time);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 10);
    } else if (isActive && time === 0) {
      setIsActive(false);
      alarmRef.current.play();
      document.querySelector(".modal").classList.replace("hidden", "active")

      if (currentCycle < 4 && currentMode === "focus-mode"){
        setCurrentMode("short-break")
        setTime(5 * 60)
        setStartingValue(5 * 60)
      } else if (currentCycle < 3 && currentMode === "short-break") {
        setCurrentCycle(currentCycle + 1)
        setCurrentMode("focus-mode")
        setTime(25 * 60)
        setStartingValue(25 * 60)
      } else if (currentCycle === 3 && currentMode === "short-break"){
        setCurrentCycle(currentCycle + 1)
        setCurrentMode("long-break")
        setTime(15 * 60)
        setStartingValue(15 * 60)
      }  else if (currentCycle === 4 && currentMode === "long-break"){
        setCurrentCycle(0)
        setCurrentMode("focus-mode")
        setTime(25 * 60)
        setStartingValue(25 * 60)
      }

      setTimeout(() => {
        document.querySelector(".modal").classList.replace("active", "hidden");
      }, 17000)
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
        currentMode
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
    currentMode
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
    currentMode
  };
}
