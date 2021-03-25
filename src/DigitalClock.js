import React, { useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState("");
  const getTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setTimeout(() => {
    getTime();
  }, 1000);
  return (
    <div className="App">
      <h1>{time}</h1>
    </div>
  );
}
