import React from "react";

interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
}

function ProgressBar({ currentValue, maxValue }: ProgressBarProps) {
  const containerStyle = {
    height: "30px",
    width: "100%",
    backgroundColor: "#e0e0df",
    borderRadius: "5px",
    overflow: "hidden",
  };

  const percent = (currentValue / maxValue) * 100;

  const fillerStyle = {
    height: "100%",
    width: `${percent}%`, // Make sure the percent is correctly applied here
    backgroundColor: "#4caf50",
    borderRadius: "inherit",
    transition: "width 0.2s ease-in",
  };

  const labelStyle = {
    padding: "5px",
    color: "white",
    fontWeight: "bold",
  };

  const goalText = { color: "black", fontStyle: "italic" };

  return (
    <>
      <div style={containerStyle}>
        <div style={fillerStyle}>
          <span style={labelStyle}>{percent}%</span>
        </div>
      </div>
      <span style={goalText}>
        Progress: cUSD{currentValue} / {maxValue}
      </span>
    </>
  );
}

export default ProgressBar;
