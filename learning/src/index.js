import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Toy } from "./Toy";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
