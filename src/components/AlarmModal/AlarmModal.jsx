import React from "react";
import { useCountdown } from "../../context/Countdown";
import "./AlarmModal.css";

function AlarmModal() {
  const { alarmRef, nowModeRef, nextModeRef } = useCountdown();

  const closeModal = () => {
    const modalElement = document.querySelector(".modal-overlay");
    modalElement.classList.replace("active", "hidden");
    alarmRef.current.pause();
  };

  return (
    <div className="modal-overlay hidden">
      <div className="modal">
        <h2>{nowModeRef.current} is over!</h2>
        <h3>Next mode: {nextModeRef.current}</h3>
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
}

export default AlarmModal;
