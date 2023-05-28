import "./Payment.scss";

const PAYMENT_OPTIONS = ["MasterCard", "Visa", "Bitcoin"];

const Payment = () => {
  return (
    <>
      <hr></hr>
      <div className="booking__row totalPrice">
        <h6>Total Price:</h6>
        <h6>$420</h6>
      </div>
      <p className="payment__p__info">
        Basic Insurance cost included. <br />
        Local taxes included. <br />
        Free cancellation.
      </p>
      <hr></hr>
      {PAYMENT_OPTIONS.map((option) => (
        <div className="booking__row payment" key={option}>
          <input value={option} type="radio" name="payment"></input>
          <div className={`icon__payment ${option}`}></div>{" "}
          <label>{option}</label>
        </div>
      ))}
      <hr></hr>

      <div className="booking__col cardInfo">
        <div className="booking__col">
          <label>Cardholder Name</label>
          <input></input>
        </div>

        <div className="booking__row cardInfo">
          <div className="booking__col cardNo">
            <label>Credit Card Number</label>
            <input></input>
          </div>
          <div className="booking__col ccv">
            <label>CCV</label>
            <input></input>
          </div>
        </div>
        <div className="booking__col expDate">
          <label>Expiration Date</label>
          <input></input>
        </div>
      </div>
    </>
  );
};

export default Payment;
