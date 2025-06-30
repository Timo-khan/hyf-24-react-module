import "./button.css";

export const Button = ({
  action,
  appearance,
  text,
  type = "button",
  formAction = null,
}) => {
  return (
    <button
      type={type ? type : null}
      className={appearance}
      formAction={formAction}
      onClick={formAction ? null : action}
    >
      {text}
    </button>
  );
};
