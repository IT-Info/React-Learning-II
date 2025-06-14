import React from "react";
import { useState } from "react";

export function Toy({ toy }) {
  function createAlert() {
    // Toy({ toy: { name: "tt", price: "price", qty: 10 } });
  }

  const [highlight, setHighlight] = useState(false);
  const [count, setCount] = useState(1);

  function changeHighlight() {
    setHighlight((s) => !s);
    console.log(highlight);
  }

  function changeCount2() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  console.log(toy);
  const styles = {
    fontSize: "20px",
    fontFamily: "arial",
    borderBottom: "1px solid black",
    padding: "5px 0px",
  };
  return (
    <div style={styles}>
      <h3
        style={{
          color: `${highlight === true ? "Red" : "black"}`,
        }}
      >
        {toy.name} - {count}
      </h3>
      <div>
        <span>Price : {toy.price}, </span>
        <span>Quantity : {toy.qty}</span>
      </div>
      <button
        // execute on click of button
        // onClick={() => {
        //   createAlert();
        // }}
        // onClick={createAlert()} // immediately executed
        onClick={createAlert}
      >
        click
      </button>
      <button onClick={changeHighlight}>Highlight</button>
      <button onClick={changeCount2}>Add Count</button>
    </div>
  );
}
