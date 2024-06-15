import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
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
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalNoOfItems={items.length}
          noOfPackedItems={items.filter((item) => item.packed).length}
        />
        <ItemsList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarksAllAsIncomplete={handleMarksAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
