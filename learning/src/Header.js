import React from "react";

export const Header = () => {
  // inline-css
  return (
    <h1 style={{ color: "red", fontFamily: "arial" }}>
      Toy Shop Opened {new Date().toLocaleTimeString()}
    </h1>
  );
};
