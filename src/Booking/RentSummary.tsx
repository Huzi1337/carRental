import Card from "../ReusableComponents/Card";
import IconListItem from "../ReusableComponents/IconListItem";

import "./RentSummary.scss";

interface Props {
  contentClass: string;
}

const RentSummary = ({ contentClass }: Props) => {
  return (
    <Card className="card__summary" tint={false}>
      <h4>Tesla Turbo Hybrid</h4>
      <p>or similar</p>
      <div className="card__summary__iconContainer">
        <div className="card__summary__row">
          <h5>5</h5>
          <div className="seats"></div>
        </div>
        <div className="envfriendly"></div>
        <div className="wifi"></div>
        <div className="AC"></div>
      </div>
      <div className="summary__details">
        <h5>Details</h5>
        <IconListItem contentClass={contentClass} iconClass="icon__globe">
          Gdańsk Airport Poland
        </IconListItem>
        <IconListItem contentClass={contentClass} iconClass="icon__calendar">
          Thu 11 May
        </IconListItem>
        <IconListItem contentClass={contentClass} iconClass="icon__tripleDots">
          4 days
        </IconListItem>
        <IconListItem contentClass={contentClass} iconClass="icon__calendar">
          Sun 14 May
        </IconListItem>
        <div className="booking__row finalPrice">
          <h5>Price</h5>
          <h4>$420</h4>
        </div>
      </div>
    </Card>
  );
};

export default RentSummary;
