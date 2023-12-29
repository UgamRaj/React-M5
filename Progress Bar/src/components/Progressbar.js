import React, { useEffect, useState } from "react";

const Progressbar = ({ value = 0, onCompleteHandler }) => {
  const [percentage, setPercentage] = useState(value);
  useEffect(() => {
    // setPercentage(Math.min(100, Math.max(value, 0)));
    if (percentage < 100) {
      setTimeout(() => setPercentage((preVal) => preVal + 1), 200);
    } else {
      onCompleteHandler();
    }
    // if (value >= 100) {
    //   onCompleteHandler();
    // }
  }, [percentage]);

  return (
    <div
      className={
        "progressbar" + (percentage >= 100 ? " card shadow-animate" : "")
      }
    >
      <span style={{ color: percentage > 49 ? "white" : "black" }}>
        {percentage} %
      </span>
      <div
        className="progressbarFill"
        style={{
          //   transform: `translateX(${percentage - 100}%)`,
          //   transformOrigin: "left",
          width: `${percentage}%`,
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      ></div>
    </div>
  );
};

export default Progressbar;
