import Button from "../../../ReusableComponents/Button";
import Card from "../../../ReusableComponents/Card";

interface Props {
  insuranceName: string;
  cost: number;
  description: string;
  selected: boolean;
  onClick: () => void;
}

const InsuranceCard = ({
  insuranceName,
  cost,
  description,
  selected,
  onClick,
}: Props) => {
  return (
    <Card className="card__insurance" tint={false}>
      <div className="insurance__content">
        <div className="insurance__row">
          <h5>{insuranceName}</h5>
          <h5>{cost > 0 ? `$${cost}/day` : "Free"}</h5>
        </div>
        <p className="insurance__desc">{description}</p>
      </div>
      <div className="insurance__btn__wrapper">
        <Button
          onClick={onClick}
          className={selected ? "btn__outline fill" : "btn__outline"}
        >
          Select
        </Button>
      </div>
    </Card>
  );
};

export default InsuranceCard;
