import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const items = localStorage.getItem("items");
    return items ? JSON.parse(items) : initialItems;
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      text: newItemText,
      packed: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleToggleItem = (itemId) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, packed: !item.packed } : item)));
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    setItems((prevItems) => prevItems.map((item) => ({ ...item, packed: true })));
  };

  const handleMarksAllAsIncomplete = () => {
    setItems((prevItems) => prevItems.map((item) => ({ ...item, packed: false })));
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarksAllAsIncomplete,
      }}>
      {children}
    </ItemsContext.Provider>
  );
}
