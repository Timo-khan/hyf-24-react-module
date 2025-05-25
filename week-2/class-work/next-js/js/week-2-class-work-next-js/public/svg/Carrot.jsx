import "./svg.css";

export const Carrot = ({ appearance }) => {
  return (
    <svg
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={appearance}
    >
      <path d="M9 12L0.514 3.516L3.344 0.688004L9 6.344L14.656 0.688004L17.486 3.516L9 12Z" />
    </svg>
  );
};
