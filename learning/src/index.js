import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  // function Toy() {
  //   return <div>toy</div>;
  // }
  return (
    <div>
      <h1> First App2</h1>
      <Toy />
      <Toy />
    </div>
  );
}

function Toy() {
  return <div>toy</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
