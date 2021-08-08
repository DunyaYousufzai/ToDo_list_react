import React, { useState } from "react";
import "./App.css";
import Aux from "./Auxiliary/Auxiliary";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ToDoList from "./ToDoList";

function App() {
  const [item, setItem] = useState();
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const listOfItem = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem(" ");
  };
  return (
    <Aux>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add items"
            onChange={itemEvent}
            value={item}
          />
          <Button
            className="button"
            style={{ marginLeft: "10px", top: "5px" }}
            onClick={listOfItem}
          >
            <AddIcon />
          </Button>
          <ol>
            {newitem.map((val, index) => {
              return <ToDoList key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </Aux>
  );
}
export default App;
