import "./Button.scss";

interface Props {
  onClick: () => void;
  submit: boolean;
  className:
    | "btn__cars"
    | "btn__news"
    | "btn__form"
    | "btn__back"
    | "btn__details"
    | "btn__outline"
    | "btn__outline fill"
    | "btn__searchBar";
  children?: React.ReactNode;
}

const Button = ({ className, children, onClick, submit }: Props) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {" "}
      {children}
    </button>
  );
};

Button.defaultProps = {
  submit: false,
};

export default Button;
