import React from "react";
import { useState } from "react";

const itemList = [
  {
    name: "item1",
    count: 1,
  },
  {
    name: "item2",
    count: 2,
  },
];

function App() {
  return (
    <div className="App">
      <Form />
      <ItemList />
    </div>
  );
}

function Form() {
  return (
    <div style={{ border: "1px solid black", marginLeft: "10px" }}>
      <span>
        <select name="count">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </span>
      <span>
        <input name="item" type="text" />
      </span>
      <span>
        <button>Add</button>
      </span>
    </div>
  );
}

function ItemList() {
  return (
    <div className="items">
      {itemList.map((e) => {
        return <Item item={e} />;
      })}
    </div>
  );
}

function Item({ item }) {
  if (item)
    return (
      <div>
        <span style={{ marginRight: "10px" }}>{item?.count}</span>
        <span style={{ marginRight: "10px" }}>{item?.name}</span>
        <span
          style={{
            marginRight: "10px",
            display: "inline",
            width: "20px",
            cursor: "pointer",
            color: "red",
          }}
        >
          &times;
        </span>
      </div>
    );
}

export default App;
