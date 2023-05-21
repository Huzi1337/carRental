import "./Button.scss";

interface Props {
  className: "btn__cars" | "btn__news";
  children?: React.ReactNode;
}

const Button = ({ className, children }: Props) => {
  return <button className={`btn ${className}`}> {children}</button>;
};

export default Button;
