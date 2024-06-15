import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

const sortOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

function ItemsList({ items, handleToggleItem, handleDeleteItem }) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((item) => {
    if (sortBy === "packed") {
      return item.packed ? -1 : 1;
    } else if (sortBy === "unpacked") {
      return item.packed ? 1 : -1;
    } else {
      return 0;
    }
  });

  return (
    <ul className="item-list">
      {items.length === 0 ? (
        <EmptyView />
      ) : (
        <>
          <section className="select">
            <Select
              defaultValue={sortOptions[0]}
              options={sortOptions}
              value={sortBy}
              onChange={(selectedOption) => {
                setSortBy(selectedOption.value);
              }}
            />
          </section>

          {sortedItems.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
              />
            );
          })}
        </>
      )}
    </ul>
  );
}
export default ItemsList;

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.text}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
