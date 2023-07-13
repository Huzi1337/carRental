import "./Card.scss";

interface Props {
  src?: string;
  className:
    | "card__news"
    | "card__details"
    | "card__vehicles"
    | "card__booking"
    | "card__summary"
    | "card__insurance";
  tint: boolean;
  children?: React.ReactNode;
}

const Card = ({ src, children, className, tint }: Props) => {
  return (
    <div className={"card" + ` ${className}`}>
      <div className="imgContainer__card">
        <img src={src}></img>
        {tint ? <div className="tint"></div> : null}
      </div>

      {children}
    </div>
  );
};

export default Card;
