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

function Toy() {
  // inline-css with variables
  const styles = { fontSize: "20px", fontFamily: "arial" };
  return <div style={styles}>toy</div>;
}

function Menu() {
  return (
    <div className="menu">
      <Toy />
      <Toy />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
