import "./PersonalInformation.scss";

const PersonalInformation = () => {
  return (
    <>
      <hr></hr>
      <label>First Name</label>
      <input required />
      <label>Last Name</label>
      <input required />
      <label>Birth Date</label>
      <input required />
      <label>Email</label>
      <input required />
      <label>Driving License ID</label>
      <input required />
      <label>Phone Number</label>
      <input required />
      <hr></hr>
      <p className="contractNotice">
        Please note you must be able to present a valid driving license in order
        to drive the vehicle. <br />
        To start your rental we require a holding deposit of $2500 available on
        your credit card. <br />
        This amount will be released upon return of the vehicle.
      </p>
    </>
  );
};

export default PersonalInformation;
