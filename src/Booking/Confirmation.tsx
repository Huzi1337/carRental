import RentSummary from "./RentSummary";
import Button from "../ReusableComponents/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Confirmation.scss";
import { resetState } from "../redux/reducers/bookingSlice";
import { RootState } from "../redux/store";

const Confirmation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.booking);

  const btnHandler = () => {
    console.log(state);
    navigate("/");
    dispatch(resetState());
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
