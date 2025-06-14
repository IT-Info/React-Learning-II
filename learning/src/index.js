import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

function App() {
  // function Toy() {
  //   return <div>toy</div>;
  // }
  return (
    <>
      <Header />
      <Menu />
    </>
  );
}

const Header = () => {
  // inline-css
  return (
    <h1 style={{ color: "red", fontFamily: "arial" }}>
      Toy Shop Opened {new Date().toLocaleTimeString()}
    </h1>
  );
};

function createAlert() {
  Toy({ toy: { name: "tt", price: "price", qty: 10 } });
}

function Toy({ toy }) {
  const [highlight, setHighlight] = useState(false);

  function changeHighlight() {
    setHighlight(true);
    console.log(highlight);
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
        {toy.name}
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
    </div>
  );
}

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

function Menu() {
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
