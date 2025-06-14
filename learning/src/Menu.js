import React from "react";
import { Toy } from "./Toy";

const toys = [
  {
    name: "Duck",
    price: 100,
    qty: 10,
  },
  {
    name: "Train",
    price: 2000,
    qty: 5,
  },
];
export function Menu() {
  if (toys.length === 0) {
    return <h3>No Toys in store</h3>;
  }
  return (
    <div className="menu">
      {/* <Toy name="Duck" price="12" qty={12} />
            <Toy name="Spiderman" price="120" qty={15} /> */}
      {toys.map((toy) => (
        <Toy key={toy.name} toy={toy} />
      ))}
    </div>
  );
}
