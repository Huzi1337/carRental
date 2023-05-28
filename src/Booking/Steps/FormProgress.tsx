import "./FormProgress.scss";

const FormProgress = () => {
  return (
    <div className="progressBar">
      <span className="currentStep">Date</span>
      <div className="line" />
      <span>Personalize</span>
      <div className="line" />
      <span>Personal Info</span>
      <div className="line" />
      <span>Payment</span>
    </div>
  );
};

export default FormProgress;
