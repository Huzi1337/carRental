import "./Card.scss";

interface Props {
  src: string;
  className: string;
  tint: boolean;
  children?: React.ReactNode;
}

const Card = ({ src, children, className, tint }: Props) => {
  return (
    <div className={"card" + ` ${className}`}>
      <img src={src}></img>
      {tint ? <div className="tint"></div> : null}
      {children}
    </div>
  );
};

export default Card;
