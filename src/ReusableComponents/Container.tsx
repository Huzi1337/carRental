import "./Container.scss";

interface Props {
  className: "container__details" | "container__booking";
  children?: React.ReactNode;
}

const Container = ({ className, children }: Props) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
