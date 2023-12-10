"use client";
import React, { useEffect, useState } from "react";

type TimerProps = {};

function formatTime(ds: number) {
  const totalSec = Math.floor(ds / 10);
  const minutes = Math.floor(totalSec / 60);
  const seconds = totalSec % 60;
  const deciseconds = ds % 10;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${deciseconds.toFixed(0)}`;
}

const GameTimer = ({}: TimerProps) => {
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
    if (!isActive) {
      setStartTime(Date.now() - elapsedTime);
    }
  }

  function reset() {
    setElapsedTime(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    } else if (!isActive && startTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime]);

  return (
    <div className="flex flex-col items-center">
      <div className="align-left">{formatTime(elapsedTime / 100)}s</div>
      <div className="">
        <button
          className={`btn btn-primary btn-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default GameTimer;
