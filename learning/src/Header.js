import React, { useState } from "react";
import { useEffect } from "react";

export const Header = () => {
  // inline-css
  const [a, setA] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setA(new Date().toLocaleTimeString());
  }, []);

  return (
    <h1 style={{ color: "red", fontFamily: "arial" }}>Toy Shop Opened {a}</h1>
  );
};
