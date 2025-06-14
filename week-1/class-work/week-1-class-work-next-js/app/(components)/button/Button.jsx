import "./button.css";

export const Button = ({ kind }) => {
  return (
    <button
      type="button"
      className={kind === "primary" ? "btn primary" : "btn danger"}
    >
      {kind === "primary" ? "ok" : "danger!"}
    </button>
  );
};
