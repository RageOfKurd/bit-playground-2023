import React from "react";

const Background = ({ color, children }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  );
};

export default Background;
