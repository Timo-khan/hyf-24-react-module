import "./button.css";

type Props = {
  type: "button" | "reset" | "submit" | undefined;
  appearance: string;
  text: string;

  action: () => void;
};

export const Button = ({
  appearance,
  action,
  text,
  type = "button",
}: Props) => {
  return (
    <button className={appearance} type={type} onClick={action}>
      {text}
    </button>
  );
};
