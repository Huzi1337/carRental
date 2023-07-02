import "./FormProgress.scss";

const steps = ["Date", "Personalize", "Personal Info", "Payment"];

interface Props {
  currentStep: number;
  numberOfSteps: number;
}

const FormProgress = ({ currentStep, numberOfSteps }: Props) => {
  return (
    <div className="progressBar">
      {steps.map((step, key) => {
        return (
          <>
            <span
              key={step}
              className={currentStep === key ? "currentStep" : ""}
            >
              {step}
            </span>
            {key === numberOfSteps - 1 ? null : (
              <div key={key} className="line" />
            )}
          </>
        );
      })}
    </div>
  );
};

export default FormProgress;
