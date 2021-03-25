import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

export default function Counter() {
  const [count, setCount] = useState(null);

  const counter = (name) => {
    if (name === "increment") setCount(count + 1);
    else if (name === "decrement") {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  const clearCounter = () => {
    setCount(null);
  };

  return (
    <div className="main">
      <div className="center">
        <h1>{count > 0 ? count : "0"}</h1>
        <h2>Counter</h2>

        <Tooltip title="Add" arrow>
          <IconButton
            aria-label="delete"
            onClick={() => {
              counter("increment");
            }}
            // color="primary"
            // size="large"
            style={{ color: "#079787" }}
          >
            <AddCircleIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete" arrow>
          <IconButton
            aria-label="delete"
            onClick={() => {
              counter("decrement");
            }}
            color="secondary"
          >
            <RemoveCircleIcon />
          </IconButton>
        </Tooltip>
        <br />
        <br />

        <Button onClick={clearCounter} variant="contained" size="small">
          Clear Counter
        </Button>
      </div>
    </div>
  );
}
