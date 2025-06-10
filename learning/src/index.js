import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  // function Toy() {
  //   return <div>toy</div>;
  // }
  return (
    <div>
      <Header />
      <Menu />
    </div>
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

function Toy(props) {
  console.log(props);
  // inline-css with variables
  const styles = { fontSize: "20px", fontFamily: "arial" };

  //   props.name = "hello"; // ERROR in console if you change property
  //Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'

  return (
    <div style={styles}>
      <h3>{props.name}</h3>
      <div>
        <span>Price : {props.price}, </span>
        <span>Quantity : {props.qty}</span>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <Toy name="Duck" price="12" qty={12} />
      <Toy name="Spiderman" price="120" qty={15} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
