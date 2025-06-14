import React from "react";
import { useState } from "react";

export function Item({ item, removeItem }) {
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
