import React, { useState } from "react";
import Aux from "./Auxiliary/Auxiliary";
import DeleteIcon from "@material-ui/icons/Delete";

const ToDoList = (props) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <Aux>
      <div className="todo_style">
        <span onClick={cutIt}>
          <DeleteIcon className="fas fa-times-octagon" />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
    </Aux>
  );
};

export default ToDoList;
