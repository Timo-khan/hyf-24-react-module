"use client";

import { Button } from "../button/Button";
import "./simpleForm.css";

import { useState } from "react";

export const SimpleForm = () => {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputChangeHandle = (event) => {
    const { name, value } = event.target;
    setInput((previous) => ({ ...previous, [name]: value }));
  };

  const submitHandle = () => {
    setShowInput(true);
  };

  const resetHandle = () => {
    setInput({
      name: "",
      email: "",
      message: "",
    });
    setShowInput(false);
  };

  return (
    <div className="form-wrap">
      {/* <pre>{JSON.stringify(input, null, 2)}</pre> */}
      <div className={showInput ? "form-display" : "form-display hide"}>
        <p>Name: {input.name}</p>
        <p>Email: {input.email}</p>
        <p>Message: {input.message}</p>
      </div>
      <label className="form-label" htmlFor="name">
        Name
        <input
          className="form-input"
          name="name"
          value={input.name}
          onChange={inputChangeHandle}
          type="text"
        />
      </label>
      <label className="form-label" htmlFor="name">
        Email
        <input
          className="form-input"
          name="email"
          value={input.email}
          onChange={inputChangeHandle}
          type="text"
        />
      </label>
      <label className="form-label" htmlFor="name">
        Message
        <textarea
          className="form-input"
          name="message"
          value={input.message}
          onChange={inputChangeHandle}
          type="text"
        />
      </label>
      <div className="form-btn">
        <Button appearance="primary" action={submitHandle} text="Submit Form" />
        <Button appearance="secondary" action={resetHandle} text="Reset Form" />
      </div>
    </div>
  );
};
