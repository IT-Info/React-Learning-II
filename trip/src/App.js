import React from "react";
import { useState } from "react";

const itemList = [
  {
    id: 1,
    name: "item1",
    count: 1,
  },
  {
    id: 2,
    name: "item2",
    count: 2,
  },
];

function App() {
  const [items, setItems] = useState([]);

  function onAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function onRemoveItem(id) {
    console.log(id);
    setItems((items) => [...items.filter((e) => e.id !== id)]);
  }

  return (
    <div className="App">
      <Form onAddItem={onAddItem} />
      <ItemList items={items} onRemoveItem={onRemoveItem} />
    </div>
  );
}

function Form({ onAddItem }) {
  const [count, setCount] = useState(2);
  const [description, setDescription] = useState("");
  function addItem() {
    let item = {
      id: Math.random(),
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

function ItemList({ items, onRemoveItem }) {
  return (
    items &&
    Array.isArray(items) &&
    items.length > 0 && (
      <div className="items">
        {items.map((e) => {
          return <Item item={e} key={e.id} removeItem={onRemoveItem} />;
        })}
      </div>
    )
  );
}

function Item({ item, removeItem }) {
  const [hightlight, setHighlight] = useState(false);

  function handleHighlight() {
    setHighlight((e) => !e);
  }

  if (item)
    return (
      <div
        onClick={handleHighlight}
        style={{
          backgroundColor: `${hightlight ? "lightgrey" : ""}`,
          display: "inline-block",
        }}
      >
        <span style={{ marginRight: "10px" }}>{item?.count}</span>
        <span style={{ marginRight: "10px" }}>{item?.name}</span>
        <span
          onClick={() => removeItem(item.id)}
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
