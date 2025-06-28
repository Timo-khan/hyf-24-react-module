"use client";

import "./toDoList.css";

import { Button } from "../button/Button";

import { useState } from "react";

export const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const inputChangeHandle = (e) => {
    setNewItem(e.target.value);
  };

  const addHandle = () => {
    if (newItem !== "") {
      setToDoList([...toDoList, newItem]);
      setNewItem("");
    }
  };

  const removeHandle = (index) => {
    const updatedList = toDoList.filter((x, i) => i !== index);
    setToDoList(updatedList);
  };

  return (
    <div className="tdl-wrap">
      <div className={toDoList.length > 0 ? "tdl-display" : "tdl-display hide"}>
        <ul className="tdl-list">
          {toDoList.map((x, i) => (
            <li key={i} className="tdl-list-item">
              <p>{x}</p>
              <Button
                action={() => removeHandle(i)}
                appearance="danger"
                text="Delete"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="tdl-add-item">
        <input
          name="newItem"
          value={newItem}
          onChange={inputChangeHandle}
          type="text"
          className="tdl-input"
        />
        <Button action={addHandle} appearance="primary" text="Add" />
      </div>
    </div>
  );
};
