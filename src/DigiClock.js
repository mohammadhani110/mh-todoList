import React from "react";
import Clock from "react-digital-clock";

export const DigiClock = () => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100vh"
      }}
    >
      <Clock />
    </div>
  );
};
