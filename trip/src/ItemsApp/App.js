import React from "react";
import { useState } from "react";
import Form from "./Form";
import { ItemList } from "./ItemList";

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

export default App;
