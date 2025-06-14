import React from "react";
import { Item } from "./Item";

export function ItemList({ items, onRemoveItem }) {
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
