import { UseFormReturnType } from "@mantine/form";
import { TextInput } from "@mantine/core";

import { IFormInitialState } from "../../redux/reducers/bookingTypes";
import { transformLabel } from "../../utils/transformLabel";
import { PersonalInfo } from "../../redux/reducers/bookingTypes";

import "./PersonalInformation.scss";

const personalInfoInstance = new PersonalInfo();

const PersonalInformation = ({
  form,
}: {
  form: UseFormReturnType<IFormInitialState>;
}) => {
  return (
    <>
      <hr></hr>
      {Object.keys(personalInfoInstance).map((key) => (
        <TextInput
          className="personalInformation__textInput"
          key={key}
          label={transformLabel(key)}
          {...form.getInputProps(key)}
        ></TextInput>
      ))}
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
