import React, { useState } from "react";
import "./styles.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { AddCircleRounded } from "@material-ui/icons";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    text: "",
    isChecked: false,
    isDisabled: false,
    isHovered: false
  });
  const [checkAll, setCheckAll] = useState(false);

  const getValue = (e) => {
    const value = e.target.value;
    const remainingItem = { ...todo };
    setTodo({ ...remainingItem, text: value });
  };

  const addTodo = () => {
    if (todo.text.length > 3) {
      let data = [...todos];
      data.push(todo);
      setTodos(data);
      clearInput();
    }
  };
  const deleteTodo = (index) => (e) => {
    let updateTodo = [...todos];
    updateTodo.splice(index, 1);
    setTodos(updateTodo);
  };

  const updateTodo = (index) => (e) => {
    let text = e.target.value;
    let updateTodos = [...todos];
    let prevTodo = { ...updateTodos[index] };

    if (text) {
      updateTodos[index] = { ...prevTodo, text };
    } else {
      let isChecked = !prevTodo.isChecked;
      let isDisabled = !prevTodo.isDisabled;
      updateTodos[index] = { ...prevTodo, isChecked, isDisabled };
    }
    setTodos(updateTodos);
  };

  const toggleHover = (index) => (e) => {
    let updateTodos = [...todos];
    let prevTodo = { ...updateTodos[index] };
    const isHovered = !prevTodo.isHovered;
    updateTodos[index] = { ...prevTodo, isHovered };
    setTodos(updateTodos);
  };

  const clearInput = () => {
    setTodo({
      text: "",
      isChecked: false,
      isDisabled: false,
      isHovered: false
    });
  };
  const handleCheckAll = () => {
    if (todos.length) {
      setCheckAll(!checkAll);
    }
  };
  const clearAll = () => {
    setTodos([]);
    setCheckAll(false);
  };

  return (
    <div className="main">
      <div className="flex f-d-c f-ai-c f-jc-c">
        <Card className="flex f-d-c f-ai-c f-jc-c card mt-1">
          <CardContent>
            <Typography variant="h4" color="textPrimary" gutterBottom>
              TodoList
            </Typography>
          </CardContent>
          <CardActions>
            <Input type="text" onChange={getValue} value={todo.text} />
            <IconButton aria-label="add to todo" onClick={addTodo}>
              <AddCircleRounded />
            </IconButton>
          </CardActions>
        </Card>
        <br />
        <ul className="p-0">
          {todos.map((item, index) => (
            <li key={index}>
              <IconButton
                aria-label="check to todo"
                onClick={updateTodo(index)}
                name="checkBtn"
                disabled={checkAll}
              >
                {item.isChecked || checkAll ? (
                  <CheckCircleIcon />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}
              </IconButton>
              <Input
                value={item.text}
                onChange={updateTodo(index)}
                type="text"
                disabled={item.isDisabled || checkAll}
                className={item.isDisabled || checkAll ? "disabled" : ""}
              />
              <IconButton
                aria-label="delete to todo"
                onClick={deleteTodo(index)}
                name="deleteBtn"
                onMouseEnter={toggleHover(index)}
                onMouseLeave={toggleHover(index)}
                disabled={checkAll}
              >
                {item.isHovered ? <DeleteIcon /> : <DeleteOutlineIcon />}
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
      {!!todos.length ? (
        <>
          <Button
            // disabled={!todos.length}
            onClick={() => {
              handleCheckAll();
            }}
          >
            {checkAll ? "Uncheck All" : "Check All"}
          </Button>
          <Button
            // disabled={!todos.length}
            onClick={() => {
              clearAll();
            }}
          >
            Clear All
          </Button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
