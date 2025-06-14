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
  const [items, setItems] = useState([]);

  function onAddItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="App">
      <Form onAddItem={onAddItem} />
      <ItemList items={items} />
    </div>
  );
}

function Form({ onAddItem }) {
  const [count, setCount] = useState(2);
  const [description, setDescription] = useState("");
  function addItem() {
    let item = {
      name: description,
      count: count,
    };
    console.log(item);
    onAddItem(item);
  }

  return (
    <div style={{ border: "1px solid black", marginLeft: "10px" }}>
      <span>
        <select
          name="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        >
          {Array.from({ length: 20 }, (item, index) => index + 1).map((no) => (
            <option value={no} key={no}>
              {no}
            </option>
          ))}
        </select>
      </span>
      <span>
        <input
          name="item"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </span>
      <span>
        <button onClick={addItem}>Add</button>
      </span>
    </div>
  );
}

function ItemList({ items }) {
  return (
    items &&
    Array.isArray(items) &&
    items.length > 0 && (
      <div className="items">
        {items.map((e) => {
          return <Item item={e} key={e.name} />;
        })}
      </div>
    )
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
