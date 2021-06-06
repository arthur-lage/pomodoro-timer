import React from "react";
import { useCountdown } from "../context/Countdown";
import "./AlarmModal.css";

function AlarmModal() {
  const { alarmRef, nowModeRef, nextModeRef } = useCountdown();

  const closeModal = () => {
    const modalElement = document.querySelector(".modal");
    modalElement.classList.replace("active", "hidden");
    alarmRef.current.pause();
  };

  return (
    <div className="modal hidden">
      <h2>{nowModeRef.current} is over!</h2>
      <h3>Next mode: {nextModeRef.current}</h3>
      <button onClick={closeModal}>OK</button>
    </div>
  );
}

export default AlarmModal;
