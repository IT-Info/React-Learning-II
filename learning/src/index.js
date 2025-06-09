import React from "react";
import ReactDOM from "react-dom/client";

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
  return <h1>Toy Shop Opened {new Date().toLocaleTimeString()}</h1>;
};

function Toy() {
  return <div>toy</div>;
}

function Menu() {
  return (
    <div>
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
