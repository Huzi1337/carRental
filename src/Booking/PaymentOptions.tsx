import { useState } from "react";

interface Props {
  options: string[];
}

const PaymentOptions = ({ options }: Props) => {
  const [activeOption, setActiveOption] = useState("");

  const activeOptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveOption(event?.target.value);
  };
  return (
    <>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            value={option}
            checked={activeOption === option}
            onChange={activeOptionHandler}
          ></input>{" "}
          <div className="icon" /> <h5>{option}</h5>
        </div>
      ))}
    </>
  );
};

export default PaymentOptions;
