import React, { useState } from "react";
import { useEffect } from "react";

export const Header = () => {
  // inline-css
  const [a, setA] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    async function setDate() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      setA(new Date().toLocaleTimeString());
    }
    setDate();
  }, []);

  return (
    <h1 style={{ color: "red", fontFamily: "arial" }}>Toy Shop Opened {a}</h1>
  );
};
