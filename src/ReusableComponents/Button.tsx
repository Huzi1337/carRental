import "./Button.scss";

interface Props {
  onClick: () => void;
  className:
    | "btn__cars"
    | "btn__news"
    | "btn__form"
    | "btn__back"
    | "btn__details"
    | "btn__outline"
    | "btn__outline fill";
  children?: React.ReactNode;
}

const Button = ({ className, children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {" "}
      {children}
    </button>
  );
};

export default Button;
