import RentSummary from "./RentSummary";
import Button from "../ReusableComponents/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetStep } from "../redux/reducers/bookingSlice";
import "./Confirmation.scss";

const Confirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const btnHandler = () => {
    navigate("/");
    dispatch(resetStep());
  };
  return (
    <div className="confirmation__container">
      <h3>Booking completed</h3>
      <div className="confirmation__icon" />
      <hr></hr>
      <RentSummary contentClass="confirmation__content" />
      <Button onClick={btnHandler} className="btn__form">
        Back to Home
      </Button>
    </div>
  );
};

export default Confirmation;
