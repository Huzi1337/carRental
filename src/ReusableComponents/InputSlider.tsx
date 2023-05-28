import Slider, { SliderProps } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const SuccessSlider = styled(Slider)<SliderProps>(() => ({
  width: 350,

  "& 	.MuiSlider-markLabel": {
    fontSize: "10px",
    marginLeft: "15px",
    fontFamily: "Cabin, sans-serif",
  },
}));

const marks = [
  {
    value: 10,
    label: "10 km",
  },
  {
    value: 2000,
    label: "2000km",
  },
];

export default function InputSlider() {
  return (
    <SuccessSlider
      valueLabelDisplay="auto"
      defaultValue={140}
      min={10}
      max={2000}
      step={10}
      marks={marks}
    />
  );
}
