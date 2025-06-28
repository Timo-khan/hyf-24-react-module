"use client";

import "./simpleForm.css";

import { useState } from "react";

import { Button } from "../button/Button";

export const SimpleForm = () => {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitHandle = (formData) => {
    const formInput = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setInput(formInput);

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
    <form className="form-wrap" action={submitHandle}>
      <div className={showInput ? "form-display" : "form-display hide"}>
        <p className="form-display-line">Name: {input.name}</p>
        <p className="form-display-line">Email: {input.email}</p>
        <p className="form-display-line">Message: {input.message}</p>
      </div>
      <label className="form-label" htmlFor="name">
        Name
        <input className="form-input" name="name" type="text" />
      </label>
      <label className="form-label" htmlFor="name">
        Email
        <input className="form-input" name="email" type="text" />
      </label>
      <label className="form-label" htmlFor="name">
        Message
        <textarea className="form-input" name="message" type="text" />
      </label>
      <Button appearance="primary" type="submit" text="Submit Form" />
      <Button
        appearance="secondary"
        formAction={resetHandle}
        text="Reset Form"
        type={null}
      />
    </form>
  );
};
