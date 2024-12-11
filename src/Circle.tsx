import React from "react";
import "./styles.css";

const Circle = ({ x, y, background }) => {
  return (
    <div
      className="circle"
      style={{
        background,
        position: "absolute",
        marginLeft: `${x - 15}px`,
        marginTop: `${y - 45}px`,
      }}
    ></div>
  );
};

export default Circle;
