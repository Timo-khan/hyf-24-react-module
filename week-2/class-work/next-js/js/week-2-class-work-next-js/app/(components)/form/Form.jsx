import { Button } from "../button/Button";
import "./form.css";

import { useState } from "react";

export const Form = () => {
  const [displayMember, setDisplayMember] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const registerHandle = () => {
    setDisplayMember(true);
  };

  const resetHandle = () => {
    setFormData({ name: "", age: 0 });
    setDisplayMember(false);
  };

  return (
    <div className="form-wrapper">
      {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
      <h4 className="form-head">Register a New Member</h4>
      <div className={displayMember ? "form-display show" : "form-display"}>
        <p>{formData.name === "" ? "N/A" : formData.name}</p>
        <p>{formData.age !== 0 && `Is ${formData.age} years old.`}</p>
      </div>
      <div className="form">
        <label className="form-label" htmlFor="name">
          New member name
          <input
            className="form-input"
            name="name"
            value={formData.name}
            onChange={handleInput}
            type="text"
          />
        </label>
        <label className="form-label" htmlFor="age">
          New Member Age
          <input
            className="form-input"
            name="age"
            value={formData.age}
            onChange={handleInput}
            type="number"
            min="0"
          />
        </label>
        <div className="form-btn">
          <Button
            action={registerHandle}
            appearance="primary"
            text="register"
          />
          <Button action={resetHandle} appearance="secondary" text="reset" />
        </div>
      </div>
    </div>
  );
};
