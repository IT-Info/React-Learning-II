import { useState } from "react";

export default function Form({ onAddItem }) {
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
