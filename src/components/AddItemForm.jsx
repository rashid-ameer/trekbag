import { useRef, useState } from "react";
import Button from "./Button";

function AddItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Empty items are not allowed!");
      inputRef.current.focus();
      return;
    }

    onAddItem(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
      <Button text="Add to list" />
    </form>
  );
}
export default AddItemForm;
