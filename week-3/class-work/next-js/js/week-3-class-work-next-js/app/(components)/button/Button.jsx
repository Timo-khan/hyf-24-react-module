import "./button.css";

export const Button = ({ action, appearance, text, type = "button" }) => {
  return (
    <button type={type} className={appearance} onClick={action}>
      {text}
    </button>
  );
};
