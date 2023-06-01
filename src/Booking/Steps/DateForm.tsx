import "./DateForm.scss";

const DateForm = () => {
  return (
    <>
      <hr></hr>
      <label>Location</label>
      <input className="booking__input__date"></input>
      <p className="booking__diff__location">
        <input type="checkbox"></input>{" "}
        <span>Return at different location</span>
      </p>
      <div className="booking__row">
        <div className="booking__col">
          <label>Pick-up date</label>
          <input></input>
        </div>
        <div className="booking__col time">
          <label>Time</label>
          <input></input>
        </div>
        <div className="booking__col">
          <label>Drop-off date</label>
          <input></input>
        </div>
        <div className="booking__col time">
          <label>Time</label>
          <input></input>
        </div>
      </div>
      <hr></hr>
      <div className="booking__row">
        <div className="booking__col priceLabel">
          <h6>Car Rental:</h6>
          <h6>Cost per 24h:</h6>
        </div>
        <div className="booking__col priceValue">
          <h6 className="price">$300</h6>
          <h6>$69</h6>
        </div>
      </div>

      <p className="booking__subscript">
        Basic Insurance cost included <br />
        Local taxes included <br /> Free cancellation
      </p>
    </>
  );
};

export default DateForm;
