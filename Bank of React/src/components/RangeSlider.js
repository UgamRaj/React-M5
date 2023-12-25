import React, { useState } from "react";
import { Slider, Box } from "@mui/material";

const RangeSlider = ({
  title,
  amount,
  minVal,
  maxVal,
  minStep,
  isPercentage,
  onChangeFun,
}) => {
  const [value, setValue] = useState(+amount);

  const onChnageHandlerFun = (e) => {
    // console.log(e.target.value);
    onChangeFun(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="slider">
      <h6>{title}</h6>
      <h3>
        {isPercentage ? "%" : "$"} {amount}
      </h3>
      <Box sx={{ width: "100%" }}>
        <Slider
          defaultValue={+amount}
          valueLabelDisplay="auto"
          step={+minStep}
          marks
          min={+minVal}
          max={+maxVal}
          onChange={onChnageHandlerFun}
          value={value}
        />
      </Box>
      <div className="minmaxContainer">
        <p>
          {isPercentage ? "%" : "$"} {minVal}
        </p>
        <p>
          {isPercentage ? "%" : "$"} {maxVal}
        </p>
      </div>
    </div>
  );
};

export default RangeSlider;
