import React, { useState } from "react";

export default function InputValue() {
  const [inputValue, setInputValue] = useState("");
  const getValue = (val, e) => {
    let input = e.target.value;
    console.log("value from value", val);
    console.log("value from input", input);
    setInputValue(input);
  };
  return (
    <div className="App">
      <h1>{inputValue ? inputValue : "HELLO WORLD"}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => getValue("hello", e)}
      />
    </div>
  );
}
